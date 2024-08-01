import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./GeneratedSignature.css";

function GeneratedSignature() {
  const [name, setName] = useState('Василь Ярош');
  const [title, setTitle] = useState('web-програміст');
  const [phone, setPhone] = useState('+38 (066)1078457');
  const [email, setEmail] = useState('v.yarosh@bgv.com.ua');
  const [website, setWebsite] = useState('https://bgvfund.org/');
  const [address, setAddress] = useState('01011, м.Київ, вул. Панаса Мирного, 6');

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

    window.getSelection().removeAllRanges(); // Deselect
  };

  return (
    <div className='container-global'>
      <div className='input-container'>
        <div className="fancy">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        </div>
        <div className="fancy">
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        </div>
        <div className="fancy">
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
        </div>
        <div className="fancy">
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>
        <div className="fancy">
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" />
        </div>
        <div className="fancy">
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
        </div>
      </div>

      <div className='table-container'>
        <div className='table-border'>
        <div id="signature-content" >
          <table style={{ width: '350.45pt', borderCollapse: 'collapse', borderSpacing: '0px', boxSizing: 'border-box' }}>
            <tbody>
              <tr>
                <td style={{ padding: '30px 10px 10px 10px', verticalAlign: 'top', width: '100.3pt', height: '69.2pt' }}>
                  <p align="center" style={{ lineHeight: '12pt', marginBottom: '7.5pt', height: "100%" }}>
                    <span>
                      <img src="https://bgvfund.org/wp-content/uploads/2024/08/BGV_group-logo-RGB-1_full_slogan-1.jpg" alt="BGV Logo" />
                    </span>
                  </p>
                </td>
                <td style={{ padding: '0cm', verticalAlign: 'top', width: '9cm', height: '69.2pt' }}>
                  <div style={{ padding: '0cm', borderBottom: "1pt solid rgb(25, 25, 25)" }}>
                    <p style={{ marginBottom: '2px', padding: '0cm' }}>
                      <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '10pt', color: 'rgb(68, 68, 68)' }}><b>{name} |</b></span>
                      <span style={{ letterSpacing: '-0.75pt', fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)' }}>{title}</span>
                    </p>
                  </div>
                  <p style={{ marginTop: "0px", marginBottom: "2px" }}>
                    <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5x' }}>
                      <b></b></span>

                    <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)' }}><b>&nbsp;&nbsp; </b></span>

                    <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px' }}>
                      <b>&nbsp;&nbsp;&nbsp;&nbsp;</b><br />
                      <img
                        src="https://img.icons8.com/ios/50/000000/phone--v1.png"
                        alt="phone-icon"
                        width="10"
                        height="10"
                        style={{ width: '13px', height: '13px', marginTop: '0px', marginBottom: '0px' }}
                      />&nbsp; {phone}
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
                      />&nbsp;
                    </span>
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
                      />&nbsp;&nbsp;</span>
                    <span style={{ fontFamily: 'Arial, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px' }}>
                      <a
                        href={website}
                        target="_blank"
                        style={{ color: 'rgb(5, 99, 193)', marginTop: '0px', marginBottom: '0px', fontFamily: "Roboto, sans-serif", fontStyle: "normal", fontSize: "9pt", lineHeight: "9pt", textDecoration: "none" }}
                      >
                        {website.replace(/^https?:\/\//, '')}
                      </a>
                    </span>
                    <span style={{ fontFamily: 'Aptos, sans-serif', fontSize: '9pt', color: 'rgb(68, 68, 68)', lineHeight: '5px' }}><br />
                      <img
                        src="https://img.icons8.com/ios/50/map-marker--v1.png"
                        alt="address-icon"
                        width="13"
                        height="10"
                        style={{ width: '15px', height: '13px', marginTop: '0px', marginBottom: '0px' }}
                      />
                      &nbsp;&nbsp;
                      <a
                        style={{ color: 'rgb(5, 99, 193)', textDecoration: "none", lineHeight: '10px' }}
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                      >
                        {address}
                      </a>
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
        <button onClick={copyToClipboard}>Копіювати підпис</button>
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
}

export default GeneratedSignature;
