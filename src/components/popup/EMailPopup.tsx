import styled from "styled-components";
import { EMailList, eMailList } from "../../data/D_EMailList";

const EMailPopup : Function = ({ off } : any) => {

    const openEmail = (address : string) => {
        window.location.href = `mailto:${address}?subject=Can I get your resume?&body=message%20goes%20here`;
        off();
    };
    
    return(
        <EMailPopupBox>
            <p>
            {eMailList.map((v, i) => (
                <div key={i}>
                    <button onClick={()=>{openEmail(v.address)}}>
                        {v.id}
                    </button>
                </div>
            ))}
            </p>
        </EMailPopupBox>
    );
};

const EMailPopupBox = styled.div`
    top: 50%;
    left: 50%;
    position: fixed;
    width: 200px;
    height: 100px;
    border-radius: 8px;
    background: #FFBF3A;
    transform: translate(-50%, -50%);
    z-index: 10;

    p{
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        div{
            width: 100%;
            text-align: center;
        }
    }
`;

export default EMailPopup;