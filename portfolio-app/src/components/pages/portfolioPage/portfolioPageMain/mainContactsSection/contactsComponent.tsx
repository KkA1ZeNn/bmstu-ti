import './contactsComponent.css'

const Contacts = () => {
    return (
        <>
            <h3 className='contacts__header'>Мои контакты</h3>
            <div className='tel_mail_block'>
               <a href='tel:88005553535' className='telephone_block'>
                  <img src="" alt="иконка телефона" />
                  <p>+7-800-555-35-35</p>
               </a>
               <a href='mailto:testmail@gmail.com' className='email_block'>
                  <img src="" alt="иконка почты" />
                  <p>testmail@gmail.com</p>
               </a>
            </div>
        </>
    );
};

export default Contacts;