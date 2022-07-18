import styled from "styled-components";
import { EMailList, eMailList } from "../../data/D_EMailList";
import I_gmail from "../../icon/Icon_gmail.png";
import I_naver from "../../icon/Icon_naver.png";


const ContactPopup : Function = ({ off } : any) => {

    const openEmail = (address : string) => {
        window.location.href = `mailto:${address}?subject=Can I get your resume?&body=message%20goes%20here`;
        off();
    };
    
    return(
        <ContactPopupBox>
            <p>
                <div className="phoneNumberWrap">
                    <button className="phoneNumber">010-9992-9822</button>
                </div>
            {eMailList.map((v : EMailList, i) => (
                <div key={i}>
                    <button onClick={()=>{openEmail(v.address)}}>
                        <img src={v.id === "GOOGLE" ? I_gmail : I_naver} alt={v.id} title={v.address} />
                    </button>
                </div>
            ))}
            </p>
        </ContactPopupBox>
    );
};

const ContactPopupBox = styled.div`
    top: 50%;
    left: 50%;
    position: fixed;
    width: 600px;
    height: 300px;
    border-radius: 8px;
    background: #FFBF3A;
    transform: translate(-50%, -50%);
    z-index: 10;

    & > .btnWrap{
        width: 400px;
        height: 56px;
        border-radius: 12px;
        font-family: 'Poppins';
        border: 1px solid #FFFFFF;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #FFFFFF;
        cursor: pointer;
        transition-duration: 0.3s;
    }

    & > .btnWrap:hover{
        transform: translateY(-2px);
    }

    p{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;

        .phoneNumberWrap{
            & > .phoneNumber{
                width: 400px;  
                height: 56px;
                border-radius: 12px;
                border: 1px solid #FFFFFF;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                text-align: center;
                letter-spacing: -0.02em;
                color: #FFFFFF;
                cursor: pointer;
                transition-duration: 0.3s;
            }

            &  > .phoneNumber:hover{
                transform: translateY(-2px);
            }
        }
        div{
            width: 100%;
            text-align: center;

            & > button{
                transition-duration: 0.3s;
                img{
                    width: 90px;
                }
            }

            & > button:hover{
                transform: translateY(-2px);
            }
        }
    }
`;

export default ContactPopup;