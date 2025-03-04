import React, { useState, useEffect } from "react";
import style from "./chat.module.css";
import { collection, addDoc, getFirestore, query, onSnapshot } from "firebase/firestore";

const Chats = () => {
    const dataBase = getFirestore();
    const [chats, setChats] = useState([]); // Состояние для хранения списка чатов

    // Функция для создания нового чата
    const onCreateNewChat = async () => {
        try {
            const chatCollection = collection(dataBase, "chat");
            const newChat = await addDoc(chatCollection, {
                //chatId: `chat${Math.floor(Math.random() * 1000)}`, // Генерируем уникальный ID
                messages: []
            });
            const chatId = newChat.id;
            await newChat.ref.update({ chatId });
            console.log("Чат создан:", newChat.id);
        } catch (error) {
            console.error("Ошибка при создании чата:", error);
        }
    };

    // Функция для получения списка чатов
    useEffect(() => {
        const fetchChats = async () => {
            try {
                const chatCollectionRef = collection(dataBase, "chat"); // Ссылка на коллекцию чатов
                const q = query(chatCollectionRef); // Создаем запрос для получения данных
                const unsubscribe = onSnapshot(q, (snapshot) => {
                    const chatsData = snapshot.docs.map((doc) => ({
                        id: doc.id, // ID документа
                        ...doc.data() // Данные документа
                    }));
                    setChats(chatsData); // Обновляем состояние с полученными данными
                });

                // Отписываемся от слушателя при размонтировании компонента
                return () => unsubscribe();
            } catch (error) {
                console.error("Ошибка при получении списка чатов:", error);
            }
        };

        fetchChats();
    }, []);

    return (
        <div>
            {/* Кнопка для создания нового чата */}
            <button className={style.buttonChat} onClick={onCreateNewChat}>
                Create Chat
            </button>

            {/* Отображение списка чатов */}
            <h3>Chats:</h3>
            <ul>
                {chats.length > 0 ? (
                    chats.map((chat) => (
                        <li key={chat.id}>
                            <strong>Chat ID:</strong> {chat.chatId}
                            <ul>
                                <li><strong>Messages:</strong> {chat.messages.length > 0 ? chat.messages.join(", ") : "No messages"}</li>
                            </ul>
                        </li>
                    ))
                ) : (
                    <p>No chats available</p>
                )}
            </ul>
        </div>
    );
};

export default Chats;