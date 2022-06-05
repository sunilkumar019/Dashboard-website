import { CContainer, CFooter, CRow } from "coreui-next";


const TheFooter = () => {
    return (


        <CFooter id="tempaltemo_footer" style={{ backgroundColor: "#292B33" }}>
            <CContainer style={{ backgroundColor: "#292B33" }} >
                <CRow style={{ paddingTop: "40px" }}>
                    <div className="col-lg-3 col-md-6 col-12 pt-5 mt-4 text-light">
                        <img className=' rounded animated pulse slower infinite' src='https://www.dexonbiotech.com/wp-content/uploads/2022/03/dexon_logo1.jpg' alt="" height={100} width={220} /> <br /> <br />
                        <div className="row">
                            <div className="d-inline-block text-truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea dolorem facere qui obcaecati nostrum reiciendis culpa quia quos voluptate!
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pt-5">
                        <h2 className="h4 text-light  pb-3">Follow Us</h2>

                        <div className="map-responsive">
                            <iframe frameBorder="0" src="" style={{ width: "260px", height: "240px",border:'2px solid white' }} allowFullScreen></iframe>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pt-5  ">
                        <h2 className="h4 text-light pb-3 ">Quick Links</h2>
                        <ul className="list-unstyled text-light footer-link-list ">
                            <li className="border-0  py-1 bg-gray-600  hover:bg-rose-700 " >
                                <a className="text-light text-decoration-none p-3" target="_blank" href='' ><i className="fab fa-facebook-f fa-md fa-fw"></i><b><i>Facebook</i></b></a>
                            </li>

                            <br />
                            <li className="border-0 bg-gray-600  hover:bg-rose-700 py-1">
                                <a className="text-light text-decoration-none p-3" target="_blank" href=''><i className="fab fa-twitter fa-md fa-fw"></i><b><i>Twitter</i></b></a>
                            </li>
                            <br />
                            <li className="border-0 bg-gray-600  hover:bg-rose-700 py-1" >
                                <a className="text-light text-decoration-none p-3" target="_blank" href=''><i className="fab fa-instagram fa-md fa-fw"></i><b><i>Instagram</i></b></a>
                            </li>
                            <br />
                            <li className="border-0 bg-gray-600  hover:bg-rose-700 py-1" >
                                <a className="text-light text-decoration-none p-3" target="_blank" href=''><i className="fab fa-pinterest fa-md fa-fw"></i><b><i>Pinterest</i></b></a>
                            </li>
                            <br />
                            <li className="border-0 bg-gray-600  hover:bg-rose-700 py-1 " >
                                <a className="text-light text-decoration-none p-3" target="_blank" href=''><i className="fab fa-linkedin fa-md fa-fw"></i><b><i>Linkedin</i></b></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 pt-5">
                        <h2 className="h4 text-light  pb-3  logo">Contact With US</h2>
                        <ul className="list-unstyled text-light footer-link-list">
                            <li>
                                <i className="fas fa-map-marker-alt fa-fw"></i>
                                <b>
                                    Ground floor 101/2 - Rani baghbr <br />
                                    Ambala Cantt, 133001, Haryana,</b>
                            </li>
                            <br />
                            <li>

                                <b>Phone&nbsp;:&nbsp;<a className="text-decoration-none  text-light" href=""> +91456789123 </a></b>
                                <br />
                                <b>Whatsapp &nbsp;:&nbsp;<a className="text-decoration-none  text-light" href="">+91789456123</a></b>
                            </li>
                            <br />
                            <li>
                                <b> <b>Email:</b> <br /> <i className="fa fa-envelope fa-fw"></i>
                                    <a className="text-decoration-none text-light" href="">arlak@gmail.com</a>

                                </b>
                            </li>
                        </ul>
                    </div>

                </CRow>

            </CContainer>

            <div className="w-100  py-4 mt-3 border-top border-muted">
                <CContainer >
                    <CRow className="pt-2">
                        <div className="col-12">
                            <p className="text-left text-light">
                                &copy; 2022 arlak  All Rights Reserved. || Web Development and Designing By <a rel="sponsored" href="https://www.webhopers.com/" target="_blank"><strong><span className="info">web</span><span className="text-warning">Hopers.</span></strong></a>
                            </p>
                        </div>
                    </CRow>
                </CContainer>
            </div>

        </CFooter>

    )
}

export default TheFooter;

