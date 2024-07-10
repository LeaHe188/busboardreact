import './modalStyle.css'
interface ModalProps {
    lineName:string;
    btn:HTMLElement | null
}


export const Modal :  React.FC<ModalProps> = ({lineName, btn}) => {
    const modal = document.getElementById(`modal_${lineName}`)

    const button = btn;

    const span: any = document.getElementsByClassName(`close`)[0];

    if(button) {
        button.onclick = () => {
            if (modal) {
                modal.style.display = "block";
            }
        }
    }
    if (span) {
        span.onclick = () => {
            if (modal) {modal.style.display = "none";}
        }
    }


    return<div id={`modal_${lineName}`} className="modal">
        <span className="close">&times;</span>
    </div>
}

