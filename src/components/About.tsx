
import UserClass from './UserClass';
const About=()=>{
    return(
        <div className='m-20 '>
            <h1 className='flex justify-center text-4xl'>About Us</h1>
            <p className='m-4'>Welcome to our Food Delivery App! We are dedicated to bringing you the best culinary experiences right to your doorstep. Our mission is to connect food lovers with a diverse range of restaurants and cuisines, making it easier than ever to satisfy your cravings.</p>
            <p className='m-4'>Whether you're in the mood for a quick snack or a gourmet meal, our app offers a seamless and convenient way to explore local eateries, place orders, and enjoy delicious food from the comfort of your home.</p>
            <p className='m-4'>Thank you for choosing our Food Delivery App. We look forward to serving you and making your dining experience exceptional!</p>
            <p className='m-4'>OUR TEAM:</p>
            <UserClass name={"helloCLASS"}/>
        </div>
    );
}
export default About;