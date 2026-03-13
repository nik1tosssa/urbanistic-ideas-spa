import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from "react-bootstrap";

function Header({onNavigate}) {
    return (
        <>
            <header
                className="sticky-top w-100 d-flex justify-content-between align-items-center p-3 shadow-sm bg-white">
                <div className={"container w-80 d-flex justify-content-between align-items-center"}>

                    {/* ЛЕВАЯ ЧАСТЬ: Группа Логотип + Название + Ссылка */}
                    <div className="d-flex align-items-center gap-4">

                        {/* Контейнер Лого + Текст */}
                        <div className="d-flex align-items-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="4" fill="#13EC13" fill-opacity="0.2"/>
                                <path
                                    d="M8.66667 18.6665V15.9998H4L6.56667 11.9998H5.33333L10 5.33317L12 8.19984L14 5.33317L18.6667 11.9998H17.4333L20 15.9998H15.3333V18.6665H12.6667V15.9998H11.3333V18.6665H8.66667ZM15.15 14.6665H17.5667L14.9833 10.6665H16.1L14 7.6665L12.8167 9.34984L14.6667 11.9998H13.4333L15.15 14.6665ZM6.43333 14.6665H13.5667L10.9833 10.6665H12.1L10 7.6665L7.9 10.6665H9.01667L6.43333 14.6665ZM6.43333 14.6665H9.01667H7.9H10H12.1H10.9833H13.5667H6.43333ZM15.15 14.6665H13.4333H14.6667H12.8167H14H16.1H14.9833H17.5667H15.15Z"
                                    fill="#0DBD0D"/>
                            </svg>

                            <span className="ms-2 fw-bold" style={{fontSize: '1.2rem'}}>Каталог Идей</span>
                        </div>

                        {/* Ссылка "Главная" */}
                        <a href="#" onClick={() => onNavigate('main')}
                           className="text-decoration-none text-dark fw-medium">
                            Главная
                        </a>
                    </div>

                    <Button onClick={() => onNavigate('create')}
                            className={"gap-2 px-4 py-2 d-flex align-items-center justify-content-center"}
                            style={{color: '#0D1B0D', backgroundColor: '#13EC13', borderColor: '#13EC13'}}>
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6Z" fill="#0D1B0D"/>
                        </svg>
                        <span>Добавить проект</span>
                    </Button>
                </div>
            </header>
        </>
    )
}

export default Header;