import {
  CCard,
  CCardImg,
  CCardImgOverlay,
  CCardText,
  CCol,
  CContainer,
  CRow,
} from "coreui-next";
import Link from "next/link";
import { useState, useEffect } from "react";

const Services = () => {
  const [text, setText] = useState([]);

  const Fetching = async () => {
    const response = await fetch("/api/hello");
    const data = await response.json();
    setText(data);
  };

  useEffect(() => {
    console.log(text);
    Fetching();
  }, []);
  return (
    <div>
      {/* Sticky Social Bar */}
      <section>
        <div className="icon-Homebar">
          <Link href="#">
            <a className="phone">
              <i className="fa fa-phone "></i>
            </a>
          </Link>
          <Link href="#">
            <a className="facebook">
              <i className="fab fa-facebook-f fa-md fa-fw"></i>
            </a>
          </Link>
          <Link href="#">
            <a className="email">
              <i className="fa fa-envelope "></i>
            </a>
          </Link>
        </div>
      </section>
      {/*sevices*/}
      

      <section>
        <CContainer className="my-5">
          <CRow>
            <CCol md={12}>
              <h1 className=" h3 text-dark  text-start pb-2">
                <b>How Do You Make Money in the Pharma Franchise Business?</b>
              </h1>

              <p className="text-dark text-start">
                <strong>Pharma Biotech </strong> is the fastest growing
                pharmaceutical manufacturing company based at Ambala Cantt,
                Haryana, India adhering to WHO GMP Compliance and producing
                quality products. We are a Leading Pharmaceutical Franchise
                Company in India serving a wide range of health care products
                such a Tablets, Syrup, Drops, Health Tonic, and Injection etc.
                We Provides Ethical Based Pcd Pharma Franchise In India, Where
                You Can Be Your OWN BOSS In Your Territory, No Politics, No Work
                Pressure, – Only Results And Rewards To Complete Your Dreams.{" "}
                <br /> <br />
                PCD Pharma Franchise Companies are those companies, which
                provides products to its franchise partners and also
                distributorship rights and monopoly of marketing for the given
                geographic area or location. <br /> <br />
                PCD Pharma means Propoganda Distribution. A PCD pharma company
                which gives products, support and brand name to its franchise
                partner is also called the “PCD pharma franchise company” or
                “pharma franchiser” <br /> <br />
                We are one of the top PCD pharma Company and welcome Pharma
                Franchisee Associates from all over India for career opportunity
                in Ethical Pharma Franchise Marketing. We provide complete
                monopoly rights to our PCD Franchise Partners which lets them
                enjoy benefits of owing an entrepreneur ship without a huge
                investment
              </p>
            </CCol>
          </CRow>
        </CContainer>
      </section>
      <section>
        <CContainer className="mb-2">
          <CRow>
            <CCol md={12}>
              <h1 className=" h3 text-dark  text-start pb-2">
                <b>Do You Make Money in the Pharma Franchise Business?</b>
              </h1>

              <p className="text-dark text-start">
                <strong>Pharma Biotech </strong> is the fastest growing
                pharmaceutical manufacturing company based at Ambala Cantt,
                Haryana, India adhering to WHO GMP Compliance and producing
                quality products. We are a Leading Pharmaceutical Franchise
                Company in India serving a wide range of health care products
                such a Tablets, Syrup, Drops, Health Tonic, and Injection etc.
                We Provides Ethical Based Pcd Pharma Franchise In India, Where
                You Can Be Your OWN BOSS In Your Territory, No Politics, No Work
                Pressure, – Only Results And Rewards To Complete Your Dreams.{" "}
                <br /> <br />
                PCD Pharma Franchise Companies are those companies, which
                provides products to its franchise partners and also
                distributorship rights and monopoly of marketing for the given
                geographic area or location. <br /> <br />
                PCD Pharma means Propoganda Distribution. A PCD pharma company
                which gives products, support and brand name to its franchise
                partner is also called the “PCD pharma franchise company” or
                “pharma franchiser” <br /> <br />
                We are one of the top PCD pharma Company and welcome Pharma
                Franchisee Associates from all over India for career opportunity
                in Ethical Pharma Franchise Marketing. We provide complete
                monopoly rights to our PCD Franchise Partners which lets them
                enjoy benefits of owing an entrepreneur ship without a huge
                investment
              </p>
            </CCol>
          </CRow>
        </CContainer>
      </section>
      <section>
        <CContainer className="mb-2">
          <CRow>
            <CCol md={12} className="mt-2 ">
              <h1 className=" h3 text-dark  text-start pb-2">
                <b>
                  Choose The Best Company To Get{" "}
                  <span className="globalColor10">
                    The Advantages Of Owning Pharma Franchise
                  </span>
                </b>
              </h1>

              <p className="text-dark text-start">
                Choose The Best Company To GetThe Advantages Of Owning Pharma
                Franchise One can only get the benefits of owning a pharma
                franchise if that person invests in the right pharma franchise
                company. With the growth of the pharma industry, you will see
                the many options for the pharma franchise in the market. This
                sometimes makes it difficult for the investor to choose the
                right pharma franchise company and as a result, they often go
                for the wrong one. Here are some points that can help you going
                for the right pharma franchise company:
              </p>
              <ul className="text-dark text-start ">
                <li>ISO and WHO certifications</li>
                <li>
                  High-quality products matching the required quality standard
                </li>
                <li>
                  A large product inventory, which will help you to become
                  successful as a franchise
                </li>
                <li>
                  High degree of commitment to providing quality products for
                  the benefit of common people
                </li>
              </ul>
            </CCol>
          </CRow>
        </CContainer>
      </section>
    </div>
  );
};

export default Services;
