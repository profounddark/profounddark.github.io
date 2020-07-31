import React from 'react';
import styles from './modal.module.css';



function Modal(props) {
    let modalClass = styles.modal;
    if (props.visible === "true") {
        modalClass = styles.modal & styles.open;
    }
    else {
        modalClass = styles.modal + " " + styles.close;
    }
    return (
        <div className={ styles.modal.concat(' ', styles.open)}>
            <div className={styles.content}>
                Hello text!
            </div>
        </div>
    );
    
}

export default Modal;