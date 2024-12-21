import Logo from "@/assets/Logo.png"

const Footer = ( ) => {


  return (
    <footer className="bg-primary-100  py-16">

      <div className="mx-auto  w-5/6  gap-16  md:flex  justify-content">
        <div className="mt-16  basis-1/2  md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">That you Dream Body Shapes Get Your Dream Body Now. World Class Studios to get the Body Shapes That you Dream Body Shapes That you Dream Body Shapes</p>
          <p>@ Evogym All Rights Reserved</p>
        </div>

        <div className="mt-16  basis-1/4  md:mt-5">
          <h4 className="font-bold">Links</h4>
          <a href="https://www.google.com" target="_blank" >Official Head Official</a>
        </div>

        <div className="mt-16  basis-1/4   md:mt-0">
          <h4 className="font-bold">Contect Us</h4>
          <p className="my-5">Evogym Thailand</p>
          <p>099-111-4567</p>
        </div>

      </div>



    </footer>
  )
}

export default Footer