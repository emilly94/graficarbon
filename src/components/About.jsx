import React from "react";
import logo from '../style/img/logo.png'
import { Image } from 'react-bootstrap';
import { BsClipboardData, BsFillBriefcaseFill, BsEyeFill } from 'react-icons/bs';

const About = ({ id }) => {
    return (
        <section id={id}>
            <header class="py-5">
            <div class="container px-lg-5">
                <div class="p-4 p-lg-5 bg-dark rounded-3 text-center">
                    <div class="m-4 m-lg-5">
                        <h1 class="display-5 fw-bold"><Image src={logo} id="imgSobreEmpresa" /></h1>
                        <p class="fs-4 text-white">Fundada na cidade de São Paulo no ano 2008, a Graficarbon é atualmente uma das empresas mais experientes no mercado carvão e grafite nos dias atuais, contando com profissionais altamente qualificados que possuem mais de 30 anos de experiencia no ramo e que buscam sempre a inovação para se adaptarem as mudanças no cenário.<span id="paragrapho"></span>
                        Desde de seu primeiro ano, nosso crescimento é constante e cada vez mais passamos confiança a nossos clientes entregando serviços e produtos da mais alta qualidade e um ótimo atendimento, sempre com muita agilidade, eficiência, comprometimento e segurança.</p>
                    </div>
                </div>
            </div>
        </header>
        <section class="pt-4" data-aos="fade-rigth">
            <div class="container px-lg-5">
                <div class="row gx-lg-5">
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><BsClipboardData/></div>
                                <h2 class="fs-4 fw-bold">Missão</h2>
                                <p class="mb-0">Entregar serviço de qualidade para a melhor satisfação do cliente.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><BsFillBriefcaseFill/></div>
                                <h2 class="fs-4 fw-bold">Visão</h2>
                                <p class="mb-0">Ser uma das maiores empresas no segmento de grafite do pais.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><BsEyeFill/></div>
                                <h2 class="fs-4 fw-bold">Valores</h2>
                                <p class="mb-0">Ética, responsabilidade social, comprometimento e transparência.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
    );
};

export default About;
