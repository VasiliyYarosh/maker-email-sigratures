import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./GeneratedSignature.css";

function GeneratedSignature() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [department, setDepartment] = useState('');
    const [phone, setPhone] = useState('+380');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('https://bgv.com.ua');
    const [address, setAddress] = useState({
        ua: '01011, м.Київ, вул. Панаса Мирного, 6',
        en: '01011, Kyiv, Panasa Myrnoho St, 6'
    });
    const [selectedAddress, setSelectedAddress] = useState('01011, м.Київ, вул. Панаса Мирного, 6');
    const [selectedImage, setSelectedImage] = useState('image1');
    const [customImageUrl, setCustomImageUrl] = useState('');
    const [showMoreFields, setShowMoreFields] = useState(false);
    const [language, setLanguage] = useState('ua');
    const [platform, setPlatform] = useState('web');

    const images = {
        image1: {
            web: 'https://bgvfund.org/wp-content/uploads/2024/08/BGV_group-logo-RGB-1_full_slogan-1.jpg',
            desktop: 'https://bgvfund.org/wp-content/uploads/2024/08/BGV_group-logo-RGB-1_full_slogan-2-1-1.jpg'
        },
        image2: {
            web: 'https://bgvfund.org/wp-content/uploads/2024/08/лого.jpg',
            desktop: 'https://bgvfund.org/wp-content/uploads/2024/08/лого-1.jpg'
        },
        image3: {
            web: 'https://bgvfund.org/wp-content/uploads/2024/08/logo-BGV_charity_fund-icon-RGB.jpg',
            desktop: 'https://bgvfund.org/wp-content/uploads/2024/08/logo-BGV_charity_fund-icon-RGB-1.jpg'
        },
        image4: {
            web: 'https://bgvfund.org/wp-content/uploads/2024/08/image.jpg',
            desktop: 'https://bgvfund.org/wp-content/uploads/2024/08/image-1.jpg'
        },
        image5: {
            web: 'https://bgvfund.org/wp-content/uploads/2024/08/укрнафтінвест_online.jpg',
            desktop: 'https://bgvfund.org/wp-content/uploads/2024/08/укрнафтінвест_desktop.jpg'
        },
        image6: {
            web: 'https://bgvfund.org/wp-content/uploads/2024/08/karier_web.jpg',
            desktop: 'https://bgvfund.org/wp-content/uploads/2024/08/karier_desktop.jpg'
        }
    };

    const websites = {
        image1: 'https://bgv.com.ua',
        image2: 'https://bgv.com.ua',
        image3: 'https://bgvfund.org',
        image4: 'https://www.bgv-graphite.com.ua',
        image5: 'https://ukrnaftinvest.com.ua',
        image6: 'https://www.gran-karier.com.ua',
    };

    useEffect(() => {
        if (!selectedAddress) {
            setSelectedAddress(address[language]);
        }
    }, [language]);

    const handleImageChange = (e) => {
        const selected = e.target.value;
        setSelectedImage(selected);
        setWebsite(websites[selected]);
        setCustomImageUrl('');
    };

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        setSelectedAddress(address[e.target.value]);
    };

    const handleAddressChange = (e) => {
        setSelectedAddress(e.target.value);
    };

    // const handleCustomImageUrlChange = (e) => {
    //     setCustomImageUrl(e.target.value);
    //     setSelectedImage('');
    // };

    const handlePlatformChange = (e) => {
        setPlatform(e.target.value);
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
            toast.success(language === 'ua' ? 'Підпис успішно скопійовано' : 'Signature copied successfully');
        } catch (err) {
            toast.error(language === 'ua' ? 'Помилка копіювання підпису' : 'Error copying signature');
        }

        window.getSelection().removeAllRanges();
    };

    return (
        <>
            <div className='container-global'>
                <div className='input-scroll'>
                    <div className='input-container'>

                        <label for='company' style={{ textAlign: 'center', marginTop: "1vh" }}>Оберіть компанію</label>
                        <div className="container">

                            <div className="select">
                                <select id='company' value={selectedImage} onChange={handleImageChange}>
                                    <option value="image1">BGV Group Managament V1</option>
                                    <option value="image2">BGV Group Managament V2</option>
                                    <option value="image3">BGV Charity Fund</option>
                                    <option value="image4">BGV Graphite</option>
                                    <option value="image5">УКРНАФТІНВЕСТ</option>
                                    <option value="image6">ГРАНІТНИЙ КАР'ЄР</option>
                                </select>
                            </div>

                        </div>
                        <label htmlFor='email'>Оберіть Outlook</label>
                        <div class="container1">
                            <div class="selector">
                                <div class="selector-item">
                                    <input
                                        type="radio"
                                        id="radio1"
                                        name="selector"
                                        class="selector-item_radio"
                                        value="web"
                                        checked={platform === 'web'}
                                        onChange={handlePlatformChange}
                                    />
                                    <label for="radio1" class="selector-item_label">App Online</label>
                                </div>
                                <div class="selector-item">
                                    <input
                                        type="radio"
                                        id="radio2"
                                        name="selector"
                                        class="selector-item_radio"
                                        value="desktop"
                                        checked={platform === 'desktop'}
                                        onChange={handlePlatformChange}
                                    />
                                    <label for="radio2" class="selector-item_label">App Desktop</label>
                                </div>

                            </div>
                        </div>
                        <label htmlFor='language-selector'>Оберіть мову підпису</label>
                        <div className="container1">
                            <div className="selector">
                                <div className="selector-item">
                                    <input
                                        type="radio"
                                        id="radio-language-ua"
                                        name="language-selector"
                                        className="selector-item_radio"
                                        value="ua"
                                        checked={language === 'ua'}
                                        onChange={handleLanguageChange}
                                    />
                                    <label htmlFor="radio-language-ua" className="selector-item_label">Українська</label>
                                </div>
                                <div className="selector-item">
                                    <input
                                        type="radio"
                                        id="radio-language-en"
                                        name="language-selector"
                                        className="selector-item_radio"
                                        value="en"
                                        checked={language === 'en'}
                                        onChange={handleLanguageChange}
                                    />
                                    <label htmlFor="radio-language-en" className="selector-item_label">Англійська</label>
                                </div>
                            </div>
                        </div>
                        <label htmlFor='name' style={{ marginTop: "20px" }}>Вкажіть ім'я та прізвище</label>
                        <div className="fancy">
                            <input type="text" id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Вкажіть ім'я та прізвище" />
                        </div>
                        <label htmlFor='title'>Вкажіть посаду</label>
                        <div className="fancy">
                            <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Посада" />
                        </div>
                        <label htmlFor='department'>Вкажіть департамент</label>
                        <div className="fancy">
                            <input type="text" id='department' value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Департамент" />
                        </div>
                        <label htmlFor='phone'>Вкажіть телефон</label>
                        <div className="fancy">
                            <input type="text" id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" />
                        </div>
                        <label htmlFor='email'>Вкажіть Email</label>
                        <div className="fancy">
                            <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>

                        <button class="button-paper" onClick={() => setShowMoreFields(!showMoreFields)}>
                            {showMoreFields ? 'Менше параметрів' : 'Більше параметрів'}
                        </button>
                        {showMoreFields && (
                            <>
                                <div className="fancy">
                                    <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Веб-сайт" />
                                </div>
                                <div className="fancy">
                                    <input type="text" value={selectedAddress} onChange={handleAddressChange} placeholder={language === 'ua' ? 'Адреса' : 'Address'} />
                                </div>
                                {/* <div className="fancy">
                                    <input type="text" value={customImageUrl} onChange={handleCustomImageUrlChange} placeholder="URL зображення" />
                                </div> */}
                            </>
                        )}
                    </div>
                </div>
                <div className='table-container'>
                    <div className='table-border'>
                        <div id="signature-content">
                            <table style={{ width: '350.45pt', borderCollapse: 'collapse', borderSpacing: '0px', boxSizing: 'border-box' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: "2px", verticalAlign: 'top', width: '100px', height: '100px' }}>
                                            <img
                                                src={customImageUrl || images[selectedImage][platform]}
                                                alt="Company Logo"
                                            />
                                        </td>
                                        <td style={{ padding: '0cm', verticalAlign: 'top', width: '9cm', height: '100px' }}>
                                            <div style={{ padding: '0cm', borderBottom: "1px solid rgb(25, 25, 25)" }}>
                                                <p style={{ marginBottom: '2px', padding: '0' }}>
                                                    <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '14pt', color: 'rgb(68, 68, 68)' }}><b>{name} | &nbsp;</b></span>
                                                    <span style={{ letterSpacing: '-0.2pt', fontFamily: 'Aptos, sans-serif', fontSize: '11pt', color: 'rgb(68, 68, 68)' }}>{title}</span>
                                                </p>
                                            </div>
                                            <p style={{ marginTop: "0px", marginBottom: "2px" }}>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', marginBottom: "2px", fontSize: '11pt', color: 'rgb(68, 68, 68)', lineHeight: '5px', paddingBottom: "10px" }}>
                                                    <b>{department}</b>
                                                </span>
                                                <br></br>

                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px', width: "15px" }}>
                                                    <img
                                                        src="https://img.icons8.com/ios/50/000000/phone--v1.png"
                                                        alt="phone-icon"
                                                        width="10"
                                                        height="10"
                                                        style={{ width: '13px', height: '13px', margin: '0px', padding: '0px' }}
                                                    />
                                                </span>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px' }}>
                                                    &nbsp;&nbsp;{formatPhone(phone)}
                                                </span>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(202, 41, 41)' }}><br /></span>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', }}>
                                                    <img
                                                        src="https://img.icons8.com/ios/50/new-post--v1.png"
                                                        alt="email-icon"
                                                        width="10"
                                                        height="10"
                                                        style={{ width: '13px', height: '13px', margin: '0px', marginRight: '2px', padding: '0px' }}
                                                    />
                                                </span>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', margin: '0px', padding: '0px', fontSize: '9pt', color: 'rgb(5, 99, 193)', lineHeight: '5px' }}>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <a
                                                        href={`mailto:${email}`}
                                                        style={{ color: 'rgb(5, 99, 193)', textDecoration: 'none', margin: '0px', padding: '0px' }}
                                                    >{email}</a>
                                                </span>
                                                <br />
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(202, 41, 41)', lineHeight: '5px' }}></span>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(202, 41, 41)', lineHeight: '5px', width: "15px" }}>
                                                    <img
                                                        src="https://img.icons8.com/ios/50/internet--v1.png"
                                                        alt="website-icon"
                                                        width="10"
                                                        height="10"
                                                        style={{ width: '14px', height: '13px', margin: '0px', padding: '0px' }}
                                                    />
                                                </span>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(5, 99, 193)', lineHeight: '5px' }}>
                                                    &nbsp;&nbsp;&nbsp;
                                                    <a
                                                        href={website}
                                                        style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', lineHeight: '5px', color: 'rgb(5, 99, 193)', textDecoration: 'none', margin: '0px', padding: '0px' }}
                                                    >{website.replace(/^https?:\/\//, '')}</a>
                                                </span>
                                                <br />
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px', width: "15px" }}>
                                                    <img
                                                        src="https://img.icons8.com/ios/50/address--v1.png"
                                                        alt="address-icon"
                                                        width="10"
                                                        height="10"
                                                        style={{ width: '13px', height: '13px', marginTop: '0px', marginBottom: '0px' }}
                                                    />
                                                </span>
                                                <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px' }}>
                                                    &nbsp;&nbsp;{selectedAddress}
                                                </span>
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table style={{ width: '350.7pt', borderCollapse: 'collapse', borderSpacing: '0px', boxSizing: 'border-box' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ borderTop: "1pt solid rgb(25, 25, 25)", width: "350.7pt", height: "4.15pt", padding: '2px' }}>
                                            <p style={{ fontFamily: 'Aptos, sans-serif', fontSize: "6pt", color: "gray", lineHeight: '8px' }}>
                                                {language === 'ua' ?
                                                    'Інформація, що міститься в цьому повідомленні, включаючи будь-які додатки до нього, є конфіденційною. Якщо ви не є призначеним одержувачем, будь ласка, не копіюйте, не використовуйте та не розголошуйте це повідомлення нікому, натомість сповістіть відправника, відповівши на це повідомлення, а потім видаліть повідомлення зі своєї системи.' :
                                                    'The information contained in this message, including any attachments, is confidential. If you are not the intended recipient, please do not copy, use, or disclose this message to anyone. Instead, notify the sender by replying to this message, and then delete it from your system.'
                                                }
                                            </p>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button onClick={copyToClipboard} class="button-paper" >Копіювати підпис</button>
                    <div className='table-instruction'>
                        <a href='https://bgvgm-my.sharepoint.com/:v:/g/personal/v_yarosh_bgv_com_ua/EWgMWF2uN1NMo_nZnsJdS74BKK84ah-FkDLRxD98jf_8qg?e=xJdFAl' target='blank'>Відео інструкція зі встановлення email підпису для "Десктопної" версії.</a>
                        <a href='https://bgvgm-my.sharepoint.com/:v:/g/personal/v_yarosh_bgv_com_ua/EVD1PdMJqCtFiEs3BL9tjygBodkLXz8NLQV5-MLQ3itfTw?e=2BaHGS' target='blank'>Відео інструкція зі встановлення email підпису "Web" версії.</a>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default GeneratedSignature;
