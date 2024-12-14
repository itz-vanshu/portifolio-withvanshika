import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import { FaSquareTwitter } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";




function Footer() {
    return (
       <div className="text-center bg-[url('https://tse2.mm.bing.net/th?id=OIP.SwJ51lnul5JMKF3Wo7V7ygHaCn&pid=Api&P=0&h=180')]">
          {/* <div className="bg-[url('https://example.com/your-image.jpg')] bg-cover bg-center h-screen"> */}

      <footer className=" flex-center text-center">
        <p>&copy; 2024 John Doe. All rights reserved.</p>
        <div className='flex-center text-center py-16'>
          
        <FaSquareWhatsapp  className='w-[100px] h-[100px] float-right '/>
        <FaFacebookSquare  className='w-[100px] h-[100px] float-right text-center'/>
        <FaSquareTwitter className='w-[100px] h-[100px] float-right text-center' />
        <FaSnapchatSquare  className='w-[100px] h-[100px] float-right text-center'/>
        


</div>
      </footer>
      </div>
    
    );
  }

  export default Footer;
  