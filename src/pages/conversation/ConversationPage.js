import { React, useEffect, useState, } from 'react';
import * as S from './ConversationStyled';
import * as C from '../../components/common/CommonStyled';
import logo from '../../assets/images/logo-white.png';
import firebase from 'firebase';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { PaperPlane } from '@styled-icons/boxicons-solid/PaperPlane';
// import { CalendarCheckmark } from '@styled-icons/fluentui-system-regular/CalendarCheckmark';

const ConversationPage = () => {

    // let history = useHistory();

    const [conversationMap, setConversationMap] = useState([]);
    const [selectedConversation, setSelectedConversation] = useState([]);
    const [selectedConvoId, setSelectedConvoId] = useState('');
    const [message, setMessage] = useState('');

    const fetchData = async () => {
        const db = firebase.firestore();
        const data = await db.collection("messaging").orderBy("time").get();
        let userConversationMap = {};
        data.docs.forEach((element) => {
            if (!(element.data().convoId in userConversationMap))
                userConversationMap[element.data().convoId] = [];
            userConversationMap[element.data().convoId].push(element.data());
        });
        setConversationMap(userConversationMap);
    };

    const sendMessage = async () => {
        // fetch admin id
        const db = firebase.firestore();
        await db.collection('messaging')
            .add({
                time: firebase.firestore.FieldValue.serverTimestamp(),
                user: 'oxRwFEjCS6Bt3FXYlsSCv',
                sentBy: 'admin',
                message,
                convoId: selectedConvoId
            });

        setMessage('');
        await fetchData();
        setSelectedConversation(conversationMap[selectedConvoId]);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <S.Wrapper>
            <div class="ui two column grid">
                <div class="column">
                    {Object.keys(conversationMap).length != 0 ? Object.keys(conversationMap).map((convoId) => {
                        let isSelected = selectedConvoId == convoId;
                        return (
                            <div class="ui segment">
                                <a class={`ui ${isSelected ? 'red' : ''}`} onClick={() => {
                                    setSelectedConversation(conversationMap[convoId]);
                                    setSelectedConvoId(convoId);
                                }}>
                                    <div class="content">
                                        <div class="header">{convoId}</div>
                                        <div class="meta">
                                            <span class="category"></span>
                                        </div>
                                        <div class="description">
                                            <p></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    }) :
                        <p>No Conversations</p>}
                </div>
                <div class="ui segment violet column">
                    {selectedConversation.length != 0 ? selectedConversation.map((message) => {
                        const ConversationCard = message.sentBy == 'admin'
                            ? S.AdminConversationCard : S.UserConversationCard;
                        return (
                            <ConversationCard>
                                <div class="ui raised card">
                                    <div class="content">
                                        <div class="header">{message.message}</div>
                                        <div class="meta">
                                            <span class="category">{message.user}</span>
                                        </div>
                                        <div class="description">
                                            <p></p>
                                        </div>
                                    </div>
                                    <div class="extra content">
                                        {moment(message.time.seconds).format('HH:mm DD MMM')}
                                    </div>
                                </div>
                            </ConversationCard>
                        )
                    }) :
                        <p>No Conversations</p>}
                    <S.MessageBox>
                        <div class="ui huge icon input">
                            <input type="text" placeholder="Write Message" value={message} onChange={(event) => {
                                setMessage(event.target.value);
                            }} />
                            <button onClick={sendMessage} disabled={message == ""}>
                                <i class="paper plane icon">
                                </i>
                            </button>
                        </div>
                    </S.MessageBox>

                </div>
            </div>

        </S.Wrapper >
    );
}

export default ConversationPage;