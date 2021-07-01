import React from "react";
import logo from '../style/img/logo.png'
import {Image} from 'react-bootstrap';
import { BsClipboardData, BsFillBriefcaseFill, BsEyeFill } from 'react-icons/bs';

const About = ({id}) => {
  return (
    <section id={id}>
        <div id="mainSobreEmpresa" data-aos="fade-right">
        <section class="py-5" id="features">
                <div class="container px-5 my-5">
                    <div class="row gx-5">
                        <div class="col-lg-4 mb-5 mb-lg-0"><h2 class="fw-bolder mb-0"><Image src={logo} id="imgSobreEmpresa"/></h2></div>
                        <div class="col-lg-8">
                            <div class="row gx-5 row-cols-1 row-cols-md-2">
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsFillBriefcaseFill/></div>
                                    <h2 class="h5">Missão</h2>
                                    <p class="mb-0">Entregar serviço de qualidade para a melhor satisfação do cliente</p>
                                </div>
                                <div class="col mb-5 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsEyeFill/></div>
                                    <h2 class="h5">Visão</h2>
                                    <p class="mb-0">PSer uma das maiores empresas no segmento de grafite do pais.</p>
                                </div>
                                <div class="col mb-5 mb-md-0 h-100">
                                    <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsClipboardData/></div>
                                    <h2 class="h5">Valores</h2>
                                    <p class="mb-0">Ética, responsabilidade social, comprometimento e transparência.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
  );
};

export default About;
