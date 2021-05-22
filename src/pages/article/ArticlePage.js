import { React, useState, useEffect } from 'react';
import * as A from './ArticleStyled';
import * as C from '../../components/common/CommonStyled';
import firebase from "firebase/app";
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../../App'

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);

    const [description, setDescription] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [editBool, setEditBool] = useState([]);

    const onImageChange = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0]; // get the supplied file
        // if there is a file, set image to that file
        if (file) {
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage(file);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            // if there is no file, set image back to null
        } else {
            setImage(null);
        }
    };

    async function submitArticle() {
        if (image) {
            const storageRef = storage.ref();
            const imageRef = storageRef.child(image.name);
            await imageRef.put(image)
            imageRef.getDownloadURL().then(async (url) => {
                const db = firebase.firestore();
                const data = await db.collection("article")
                const docId = uuidv4()
                await data.doc(docId).set({
                    id: docId,
                    appId: "b9RdbkE3hCvpjyw9S2PQ",
                    description: description,
                    image: url,
                    title: title,
                    views: 0,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
                setDescription("")
                setImage(null)
                setTitle("")
                fetchArticles()
            });
        }
    }

    async function editArticle(obj) {
        if (newDescription != "") {
            const db = firebase.firestore();
            const data = await db.collection("article")
            await data.doc(obj.id).update({
                description: newDescription,
            })
            setNewDescription("")
            fetchArticles()
        }

    }

    async function deleteArticle(obj) {
        const db = firebase.firestore();
        const data = await db.collection("article")
        await data.doc(obj.id).delete()
        fetchArticles()
    }

    async function fetchArticles() {
        const db = firebase.firestore();
        const data = await db.collection("article").get();
        const obj = []
        let edit = []
        data.docs.map(doc => {
            let ob = {}
            ob.id = doc.data().id
            ob.edit = false
            edit.push(ob)
            obj.push(doc.data())
        });
        setArticles(obj)
        setEditBool(edit)
    };

    async function toggleEdit(obj) {
        const tempObj = []
        for (let a of editBool) {
            if (a.id === obj.id) {
                a.edit = true
            } else {
                a.edit = false
            }
            tempObj.push(a)
        }
        setEditBool(tempObj)
        setNewDescription("")
    }

    useEffect(() => {
        fetchArticles()
    }, []);

    return (
        <>
            <A.Wrapper>
                <A.InputWrapper>
                    <A.SubWrapper>
                        <A.Head>Add New ARTICLE</A.Head>
                    </A.SubWrapper>
                    <A.InputRow>
                    <A.InputField placeholder="Enter your title" bottomMargin="20px" onChange={e => setTitle(e.target.value)} value={title}></A.InputField>
                    <input type="file" accept="image/x-png,image/jpeg" style={{ paddingBottom: "20px" }} onChange={(e) => { onImageChange(e); }} />

                    </A.InputRow>
                    <A.DescriptionField placeholder="Enter your Description" bottomMargin="20px" onChange={e => setDescription(e.target.value)} value={description} rows = {"10"}></A.DescriptionField>
                    <C.Button onClick={() => submitArticle()}>Submit</C.Button>
                </A.InputWrapper>

                {articles.length !== 0 ? articles.map((obj) => {
                    return (
                        <A.ArticleWrapper>
                            <A.Img src={obj.image} >
                            </A.Img>
                            <A.SubArticleWrapper>
                                <A.Row>
                                <A.Head>
                                    {obj.title}
                                    <A.SubHead>
                                        {new Date(obj.createdAt.seconds * 1000).toDateString()} {new Date(obj.createdAt.seconds * 1000).toLocaleTimeString()} / {obj.appId}
                                    </A.SubHead>
                                    
                                </A.Head>
                                <A.Button onClick={() => deleteArticle(obj)}>Delete</A.Button>

                                </A.Row>
                                <A.Description>{obj.description}</A.Description>
                                <A.Delete>
                                    Views: {obj.views}
                                    <A.Edit>
                                    {editBool.map((val) => {
                                        return (
                                            <A.Edit>
                                                { val.id == obj.id ? <A.Edit>
                                                    {
                                                        !val.edit ?
                                                            <A.Button onClick={() => toggleEdit(obj)}>Edit</A.Button> :
                                                            <A.SubWrapper>
                                                                <A.InputField placeholder="Enter new Description" bottomMargin="20px" onChange={e => setNewDescription(e.target.value)} value={newDescription}></A.InputField>
                                                                <C.Button onClick={() => editArticle(obj)}>Edit</C.Button>
                                                            </A.SubWrapper>
                                                    }
                                                </A.Edit> : <div></div>}
                                            </A.Edit>
                                        )

                                    })}
                                </A.Edit>
                                </A.Delete>
                                
                            </A.SubArticleWrapper>
                        </A.ArticleWrapper>
                    );
                }) : <h3>No Articles</h3>}
            </A.Wrapper>
        </>
    );
}

export default ArticlePage;