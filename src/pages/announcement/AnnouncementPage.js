import { React, useState, useEffect } from 'react';
import * as A from './AnnouncementStyled';
import * as C from '../../components/common/CommonStyled';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../../App'

const AnnouncementPage = () => {
    const [announcements, setAnnouncements] = useState([]);

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
                    console.log(file);
                    setImage(file);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            // if there is no file, set image back to null
        } else {
            setImage(null);
        }
    };

    async function submitAnnouncement() {
        if (image) {
            const storageRef = storage.ref();
            const imageRef = storageRef.child(image.name);
            await imageRef.put(image)
            imageRef.getDownloadURL().then(async (url) => {
                const db = firebase.firestore();
                const data = await db.collection("announcement")
                const docId = uuidv4()
                await data.doc(docId).set({
                    id: docId,
                    appId: "randomString",
                    description: description,
                    image: url,
                    title: title,
                    views: 0,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                })
                setDescription("")
                setImage(null)
                setTitle("")
                fetchAnnouncement()
            });
        }
    }

    async function editAnnouncement(obj) {
        if (newDescription != "") {
            const db = firebase.firestore();
            const data = await db.collection("announcement")
            await data.doc(obj.id).update({
                description: newDescription,
            })
            setNewDescription("")
            fetchAnnouncement()
        }

    }

    async function deleteAnnouncement(obj) {
        const db = firebase.firestore();
        const data = await db.collection("announcement")
        await data.doc(obj.id).delete()
        fetchAnnouncement()
    }

    async function fetchAnnouncement() {
        const db = firebase.firestore();
        const data = await db.collection("announcement").get();
        const obj = []
        let edit = []
        data.docs.map(doc => {
            let ob = {}
            ob.id = doc.data().id
            ob.edit = false
            edit.push(ob)
            obj.push(doc.data())
        });
        setAnnouncements(obj)
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
        fetchAnnouncement()
    }, []);

    return (
        <>
            <A.Wrapper>
                <A.InputWrapper>
                    <A.SubWrapper>
                        <A.Head>INPUT ANNOUNCEMENT</A.Head>
                    </A.SubWrapper>
                    <A.InputField placeholder="Enter your title" bottomMargin="20px" onChange={e => setTitle(e.target.value)} value={title}></A.InputField>
                    <A.InputField placeholder="Enter your Description" bottomMargin="20px" onChange={e => setDescription(e.target.value)} value={description}></A.InputField>
                    <input type="file" accept="image/x-png,image/jpeg" style={{ paddingBottom: "20px" }} onChange={(e) => { onImageChange(e); }} />
                    <C.Button onClick={() => submitAnnouncement()}>Submit</C.Button>
                </A.InputWrapper>

                {announcements.length !== 0 ? announcements.map((obj) => {
                    return (
                        <A.AnnouncementWrapper>
                            <A.Img>
                                <img src={obj.image} height="100" />
                            </A.Img>
                            <A.SubAnnouncementWrapper>
                                <A.Head>
                                    {obj.title}
                                    <A.SubHead>
                                        {new Date(obj.createdAt.seconds * 1000).toDateString()} {new Date(obj.createdAt.seconds * 1000).toLocaleTimeString()} / {obj.appId}
                                    </A.SubHead>
                                </A.Head>

                                {obj.description} <br></br><br></br>
                                <A.Delete>
                                    Views: {obj.views}
                                    <A.Button onClick={() => deleteAnnouncement(obj)}>Delete</A.Button>
                                </A.Delete>
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
                                                                <C.Button onClick={() => editAnnouncement(obj)}>Edit</C.Button>
                                                            </A.SubWrapper>
                                                    }
                                                </A.Edit> : <div></div>}
                                            </A.Edit>
                                        )

                                    })}
                                </A.Edit>
                            </A.SubAnnouncementWrapper>
                        </A.AnnouncementWrapper>
                    );
                }) : <h3>No Announcements</h3>}
            </A.Wrapper>
        </>
    );
}

export default AnnouncementPage;