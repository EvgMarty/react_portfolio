const Contacts = () => {
   return ( 
      <main className="section ">
      <div className="container">
         <h1 className="title-1">Contacts</h1>
         <ul className="content-list">
            <li className="content-list__item">
               <h2 className="title-2">Location</h2>
               <p>Ukraine, Odesa</p>
            </li>
            <li className="content-list__item">
               <h2 className="title-2">Telegram / Viber</h2>
               <a href="tel:+380507406980">+38 (050) 740 69 80</a>
            </li>
            <li className="content-list__item">
               <h2 className="title-2">Email</h2>
               <a href="mailto:mrtevgeniy@gmail.com">mrtevgeniy@gmail.com</a>
            </li>
         </ul>
      </div>
   </main>
    );
}
 
export default Contacts;