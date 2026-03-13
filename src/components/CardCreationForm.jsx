import React from 'react';
import {Form, Row, Col, Button} from "react-bootstrap";

function CardCreationForm({onCancel}) {
    return (
        <div className="container w-75 p-3 justify-content-center d-flex flex-column align-items-center">
            <div className="p-3 w-75 align-items-start justify-content-start d-flex" id="form-header">
                <div>
                    <h2>Новый проект</h2>
                    <p className="text-muted">Заполните форму ниже, чтобы предложить свою идею по благоустройству
                        территории.</p>
                </div>
            </div>

            {/* Ограничиваем ширину всей формы через w-75 или просто колонку */}
            <div style={{backgroundColor: "white", borderRadius: 12}} className="p-3 w-75 justify-content-center" id="form-body">

                <Form.Group className="mb-3">
                    <Form.Label>Ссылка на изображение проекта</Form.Label>
                    <Form.Control placeholder="Вставьте прямую ссылку на картинку (URL)"/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Название проекта</Form.Label>
                    <Form.Control placeholder="Например: Сквер на улице Ленина"/>
                </Form.Group>

                {/* Сетка для Автора и Статуса */}
                <Row>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Label>Автор</Form.Label>
                        <Form.Control placeholder="Ваше имя"/>
                    </Col>
                    <Col sm={12} md={6} className="mb-3">
                        <Form.Label>Статус</Form.Label>
                        <Form.Select> {/* Для статуса лучше Select */}
                            <option>Идея</option>
                            <option>Проект</option>
                        </Form.Select>
                    </Col>
                </Row>

                <div>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control rows={7} as={"textarea"}
                                  placeholder={"Опишите подробно вашу идею, какую проблему она решает и какой результат ожидается..."}>
                    </Form.Control>
                    <Form.Text>Краткое описание поможет другим пользователям лучше понять вашу инициативу.</Form.Text>
                </div>

                <div className={"d-flex justify-content-end gap-2"}>
                    <Button onClick={onCancel} variant="light" type="submit">Отмена</Button>
                    <Button style={{color: '#0D1B0D', backgroundColor: '#13EC13', borderColor: '#13EC13'}}
                            className={"gap-2 px-4 py-2 d-flex align-items-center justify-content-center"}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.83333 13.3335V6.54183L3.66667 8.7085L2.5 7.50016L6.66667 3.3335L10.8333 7.50016L9.66667 8.7085L7.5 6.54183V13.3335H5.83333ZM0 4.16683V1.66683C0 1.2085 0.163194 0.816134 0.489583 0.489746C0.815972 0.163357 1.20833 0.000162125 1.66667 0.000162125H11.6667C12.125 0.000162125 12.5174 0.163357 12.8438 0.489746C13.1701 0.816134 13.3333 1.2085 13.3333 1.66683V4.16683H11.6667V1.66683H1.66667V4.16683H0Z"
                                fill="#0D1B0D"/>
                        </svg>
                        Опубликовать проект</Button>
                </div>
            </div>
        </div>
    );
}

export default CardCreationForm