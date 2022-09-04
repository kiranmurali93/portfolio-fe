import Navbar from '../components/navbar';
import InitiativesTitle from '../components/initiativeTitle';

export default function Contact() {
  return (
    <div className="bg-[#f9f4ed] text-[#444444] h-[100%] min-h-screen w-[100vw] pb-16">
      <div className="container mx-auto h-[100%] pt-10">
        <div className="container mx-auto w-[70%]">
          <div className="text-6xl font-dosis font-bold pt-5">Contact Me</div>
          <div className="h-4 bg-[#CC6666] rounded-md content-center m-auto mt-5"></div>
          <div>
            <form action="/send-data-here" method="post">
              <div>
                <label htmlFor="first">Name:</label>
                <input type="text" id="first" name="first" />
              </div>
              <div>
                <label htmlFor="first">Name:</label>
                <input type="text" id="first" name="first" />
              </div>
              <div>
                <label htmlFor="first">Name:</label>
                <input type="text" id="first" name="first" />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
