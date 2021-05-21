import {React, useState, useEffect} from 'react';
import * as A from './AnnouncementStyled';
import * as C from '../../components/common/CommonStyled';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid'

const AnnouncementPage = () => {
    const [announcements, setAnnouncements] = useState([]);

    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");

    async function submitAnnouncement() {
        const db = firebase.firestore();
        const data = await db.collection("announcement")
        const docId = uuidv4()
        await data.doc(docId).set({
            appId: "randomString",
            description: description,
            image: image,
            title: title,
            views: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setDescription("")
        setImage("")
        setTitle("")
    }

    async function fetchAnnouncement() {
        const db = firebase.firestore();
        const data = await db.collection("announcement").get();
        const obj = []
        data.docs.map(doc => {
            obj.push(doc.data())
        });
        setAnnouncements(obj)
    };

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
                    <A.InputField placeholder="Enter your Description" bottomMargin="20px"  onChange={e => setDescription(e.target.value)} value = {description}></A.InputField>
                    <A.InputField placeholder="Enter your Image" bottomMargin="20px"  onChange={e => setImage(e.target.value)} value = {image}></A.InputField>
                    <A.InputField placeholder="Enter your title" bottomMargin="20px"  onChange={e => setTitle(e.target.value)} value = {title}></A.InputField>
                    <C.Button onClick = {()=>submitAnnouncement()}>Submit</C.Button>
                </A.InputWrapper>

                { announcements.length != 0 ? announcements.map((obj) => {
                    return (
                    <A.AnnouncementWrapper>
                        <A.Img>
                            <img src={obj.image} height="100"/>
                        </A.Img>
                        <A.SubAnnouncementWrapper>
                            <A.Head>
                                {obj.title}
                                <A.SubHead>
                                    {new Date(obj.createdAt.seconds*1000).toDateString()} {new Date(obj.createdAt.seconds*1000).toLocaleTimeString()} / {obj.appId}
                                </A.SubHead>
                            </A.Head>
                            
                            {obj.description} <br></br><br></br>
                            Views: {obj.views}

                            
                        </A.SubAnnouncementWrapper>
                    </A.AnnouncementWrapper>
                    );
                }) : <h3>No Announcements</h3> }
            </A.Wrapper>
        </>
    );
}

export default AnnouncementPage;