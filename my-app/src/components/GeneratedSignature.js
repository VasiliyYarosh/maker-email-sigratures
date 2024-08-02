import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./GeneratedSignature.css";



function GeneratedSignature() {
    const [name, setName] = useState('Тестовий Орнест');
    const [title, setTitle] = useState('Бухгалтер');
    const [department, setDepartment] = useState('Фінансовий департамент');
    const [phone, setPhone] = useState('+380');
    const [email, setEmail] = useState('t.ornest@bgv.com.ua');
    const [website, setWebsite] = useState('https://bgv.org');
    const [address, setAddress] = useState('01011, м.Київ, вул. Панаса Мирного, 6');
    const [selectedImage, setSelectedImage] = useState('image1');

    const images = {
        image1: 'https://bgvfund.org/wp-content/uploads/2024/08/BGV_group-logo-RGB-1_full_slogan-1.jpg',
        image2: 'https://bgvfund.org/wp-content/uploads/2024/08/BGV_group-logo-RGB-1_full_slogan-1.jpg',
        image3: 'https://bgvfund.org/wp-content/uploads/2024/08/logo-BGV_charity_fund-icon-RGB.jpg',
        image4: 'https://bgvfund.org/wp-content/uploads/2024/08/BGV_group-logo-RGB-1_full_slogan-1.jpg',
    };

    const websites = {
        image1: 'https://bgv.com.ua',
        image2: 'https://bgv.com.ua',
        image3: 'https://bgvfund.org',
        image4: 'https://www.bgv-graphite.com.ua'
    };

    const handleImageChange = (e) => {
        const selected = e.target.value;
        setSelectedImage(selected);
        setWebsite(websites[selected]);
    };

    const formatPhone = (phone) => {
        if (typeof phone === 'string' && phone.startsWith('+380')) {
            return phone.replace(/(\+380)(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 ($2) $3-$4-$5');
        }
        return phone;
    };
    

    const copyToClipboard = () => {
        const signature = document.getElementById('signature-content');
        const range = document.createRange();
        range.selectNode(signature);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);

        try {
            document.execCommand('copy');
            toast.success('Підпис успішно скопійовано');
        } catch (err) {
            toast.error('Помилка копіювання підпису');
        }

        window.getSelection().removeAllRanges();
    };

    return (
        <div className='container-global'>
            <div className='input-container'>
                <div className="container">
                    <div className="select">
                        <select value={selectedImage} onChange={handleImageChange}>
                            <option value="image1">BGV Group Managament V1</option>
                            <option value="image2">BGV Group Managament V2</option>
                            <option value="image3">BGV Charity Fund</option>
                            <option value="image4">BGV Graphite</option>
                        </select>
                    </div>
                </div>
                <div className="fancy">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ім'я" />
                </div>
                <div className="fancy">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Посада" />
                </div>
                <div className="fancy">
                    <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Департамент" />
                </div>
                <div className="fancy">
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" />
                </div>
                <div className="fancy">
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                </div>
                <div className="fancy">
                    <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Веб-сайт" />
                </div>
                <div className="fancy">
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Адреса" />
                </div>
            </div>

            <div className='table-container'>
                <div className='table-border'>
                    <div id="signature-content">
                        <table style={{ width: '350.45pt', borderCollapse: 'collapse', borderSpacing: '0px', boxSizing: 'border-box' }}>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '0px 0px 0px 0px', verticalAlign: 'top', width: '100.3pt', height: '69.2pt' }}>
                                        <p align="center" style={{ lineHeight: '12pt', height: "100%" }}>
                                            <span>
                                                <img src={images[selectedImage]} alt="BGV Logo" />
                                            </span>
                                        </p>
                                    </td>
                                    <td style={{ padding: '0cm', verticalAlign: 'top', width: '9cm', height: '69.2pt' }}>
                                        <div style={{ padding: '0cm', borderBottom: "1pt solid rgb(25, 25, 25)" }}>
                                            <p style={{ marginBottom: '2px', padding: '0' }}>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '10pt', color: 'rgb(68, 68, 68)' }}><b>{name} | &nbsp;</b></span>
                                                <span style={{ letterSpacing: '-0.2pt', fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)' }}>{title}</span>
                                            </p>
                                        </div>
                                        <p style={{ marginTop: "0px", marginBottom: "2px" }}>
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px', paddingBottom: "10px" }}>
                                                <b>{department}</b>
                                            </span>
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px' }}>
                                                <b>&nbsp;&nbsp;&nbsp;&nbsp;</b><br />
                                                <img
                                                    src="https://img.icons8.com/ios/50/000000/phone--v1.png"
                                                    alt="phone-icon"
                                                    width="10"
                                                    height="10"
                                                    style={{ width: '13px', height: '13px', marginTop: '0px', marginBottom: '0px' }}
                                                />
                                            </span>&nbsp;
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', lineHeight: '5px' }}>
                                                &nbsp;{formatPhone(phone)}
                                            </span>
                                            <span
                                                style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(202, 41, 41)' }}><br /></span>
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)' }}>
                                                <img
                                                    src="https://img.icons8.com/ios/50/new-post--v1.png"
                                                    alt="email-icon"
                                                    width="10"
                                                    height="10"
                                                    style={{ width: '13px', height: '13px', marginTop: '0px', marginBottom: '0px' }}
                                                />
                                            </span>&nbsp;
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(5, 99, 193)', lineHeight: '5px' }}>
                                                <a
                                                    href={`mailto:${email}`}
                                                    style={{ color: 'rgb(5, 99, 193)', marginTop: '0px', marginBottom: '0px', marginLeft: '2px', textDecoration: "none" }}
                                                >{email}</a>
                                            </span>
                                            <br />
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(202, 41, 41)', lineHeight: '5px' }}></span>
                                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '9pt', color: 'rgb(202, 41, 41)', lineHeight: '5px' }}>
                                                <img
                                                    src="https://img.icons8.com/ios/50/internet--v1.png"
                                                    alt="website-icon"
                                                    width="10"
                                                    height="10"
                                                    style={{ width: '14px', height: '13px', marginTop: '0px', marginBottom: '0px' }}
                                                /></span>&nbsp;
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(5, 99, 193)', lineHeight: '5px' }}>
                                                <a
                                                    href={website}
                                                    style={{ color: 'rgb(5, 99, 193)', textDecoration: 'none' }}
                                                >{website.replace(/^https?:\/\//, '')}</a>
                                            </span>
                                            <br />
                                            <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px' }}>
                                                <img
                                                    src="https://img.icons8.com/ios/50/address--v1.png"
                                                    alt="address-icon"
                                                    width="10"
                                                    height="10"
                                                    style={{ width: '13px', height: '13px', marginTop: '0px', marginBottom: '0px' }}
                                                />
                                            </span>&nbsp;
                                            <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', lineHeight: '5px' }}>
                                                &nbsp;{address}
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table style={{ width: '350.7pt', borderCollapse: 'collapse', borderSpacing: '0px', boxSizing: 'border-box' }}>
                            <tbody>
                                <tr>
                                    <td style={{ borderTop: "1pt solid rgb(25, 25, 25)", padding: "0cm", width: "350.7pt", height: "4.15pt", padding: '2px' }}>
                                        <p style={{ fontFamily: 'Aptos, sans-serif', fontSize: "6pt", color: "gray", lineHeight: '8px' }}>
                                            Інформація, що міститься в цьому повідомленні, включаючи будь-які вкладення до нього, є конфіденційною.
                                            Якщо ви не є одержувачем, будь ласка, не копіюйте. Використовувати або розкривати це повідомлення будь-кому,
                                            але сповістити відправника, відповівши на це повідомлення, а потім видалити повідомлення зі своєї системи.
                                        </p>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button onClick={copyToClipboard} class="button-paper" role="button">Копіювати підпис</button>
                <div className='table-instruction'>
                    <a href='https://google.com' target='blank'>Відео інструкція зі встановлення email підпису для "Десктопної" версії.</a>
                    <a href='https://google.com' target='blank'>Відео інструкція зі встановлення email підпису "Web" версії.</a>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default GeneratedSignature;
