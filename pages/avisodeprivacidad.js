import React from "react";
import Image from "next/image";
import styles from "../styles/Aviso.module.css";
import gBethel from "../public/grupoBethel.jpg";

export default function AvisoDePrivacidad() {
  return (
    <div className={styles.aviso}>
      <div className={styles.title}>
        <h1>AVISO DE PRIVACIDAD</h1>
        <h2>de Centro Ecoturistico Bethel</h2>
      </div>
      <div className={styles.avisoTxt}>
        <p>
          Centro Ecoturistico Bethel, con domicilio en Avenida Claveria No, 12
          Col. Claveria C.P.02080 Azcapotzalco Ciudad de México es responsable
          del tratamiento y protección de sus datos personales para garantizar
          su confidencialidad, con medidas de seguridad sobre los sistemas de
          información electrónicos y/o impresos en donde están registrados.
        </p>
        <p>
          Los datos personales que Usted nos proporcione ya sea en forma
          directa, a través de nuestra página en Internet www.bethel.org.mx o
          por medio de otros mecanismos permitidos por la Ley, será utilizada
          para los siguientes fines:
        </p>
        <ul>
          <li>
            Proveer los servicios ofrecidos por Centro Ecoturístico Bethel.
          </li>
          <li>
            Informar sobre nuvos servicios o cambios que estén relacionados con
            el plan general de Centro Ecoturístico Bethel.
          </li>
          <li>Planear eventos y actividades de Centro Ecoturístico Bethel.</li>
          <li>
            Realizar análisis internos que nos permitan cumplir con los
            estándares del plan general.
          </li>
        </ul>
        <p>
          Para las finalidades antes mencionadas, requerimos obtener los
          siguientes datos personales: nombre, domicilio, teléfono fijo o
          celular, edad, estado civil, ocupación, estudios, fotografía y fecha
          de nacimiento, considerado como sensible según lo establece la Ley
          Federal de Protección de Datos Personales en Posesión de los
          Particulares, el relacionado con Centro Ecoturistico Bethel.{" "}
        </p>
        <p>
          En todos los casos, es nuestro compromiso tratarlos bajo medidas de
          seguridad que garanticen contra su uso indebido o ilícito, acceso no
          autorizado, pérdida, alteración, robo o modificación.{" "}
        </p>
        <p>
          Usted tiene derecho de acceder, rectificar y cancelar sus datos
          personales, así como de oponerse al tratamiento de los mismos o
          revocar el consentimiento que para tal fin nos haya otorgado. Para el
          ejercicio de cualquiera de estos derechos, deberá presentar solicitud
          por escrito en las oficinas de esta Iglesia, conteniendo la siguiente
          información: nombre y apellidos; datos de contacto; descripción del
          motivo por el cual se tramita la solicitud; indicar la información que
          desea obtener, rectificar o cancelar; firma autógrafa, y; copia de una
          identificación oficial.Su solicitud será atendida en un plazo no mayor
          a 10 días hábiles contados a partir de su fecha de recepción.{" "}
        </p>
        <p>
          Asimismo, le informamos que sus datos personales pueden ser
          transferidos y tratados dentro y fuera del país, por personas
          distintas a esta Iglesia. En este sentido, su información puede ser
          compartida con nuestro grupo para fines estadísticos, promocionales o
          de planeación. Nos reservamos el derecho de efectuar en cualquier
          momento modificaciones o actualizaciones al presente aviso de
          privacidad, para la atención de novedades legislativas, políticas
          internas o nuevos requerimientos para la prestación u ofrecimiento de
          nuestros servicios. Estas modificaciones estarán disponibles a través
          de nuestra página en internet www.bethel.org.mx
        </p>
        <p>
          Para cualquier información sobre este aviso de privacidad, favor de
          contactar a través del correo electrónico:
        </p>
        <p className={styles.longtext}>
          avisodeprivacidad@navidadenlasmontanas.com
        </p>
        <p>
          Oficinas: Claveria No. 12 Col. Claveria Azcapotzalco México Ciudad de
          México
        </p>
        <p>
          {" "}
          <a href="www.bethel.org.mx">www.bethel.org.mx</a>{" "}
          <a href="www.navidadenlasmontanas.com">
            www.navidadenlasmontanas.com
          </a>{" "}
          daniel.coca@bethel.org.mx
        </p>
        <Image
          src={gBethel}
          alt="Grupo Bethel"
          layout="intrinsic"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
