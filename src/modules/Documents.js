import React from "react";

import Documentcard from "./Documentcard";

import certificate1 from "../assets/documents/Certificate 1 Preview.jpg";
import certificate2 from "../assets/documents/Certificate 2 Preview.jpg";
import diplomWiFi from "../assets/documents/Diplom WiFi Belikova Y Preview.jpg";
import diplomWiFiZeugnis1 from "../assets/documents/Zeugnis WiFi Belikova Y 1 Preview.jpg";
import diplomWiFiZeugnis2 from "../assets/documents/Zeugnis WiFi Belikova Y 2 Preview.jpg";
import diplom from "../assets/documents/Diplom, Yuliya Vagizova Preview.jpg";
import referenzKMD from "../assets/documents/Referenz 19 April 2024 KMD Herbststrasse Preview.jpg";
import urkunde1 from "../assets/documents/Urkunde Make-up School Moskow 1 Preview.jpg";
import urkunde2 from "../assets/documents/Urkunde Make-up School Moskow 2 Preview.jpg";
import urkunde3 from "../assets/documents/Urkunde Make-up School Moskow 3 Preview.jpg";

const docdata = [
    {
        id: "diplomWiFi",
        name: "Diplom WIFI",
        preview: diplomWiFi,
        link: "http://valtek.liveblog365.com/documents/DiplomWiFiBelikovaY.pdf"
    },
    {
        id: "diplomWiFiZeugnis1",
        name: "Diplom WIFI Zeugnis 1",
        preview: diplomWiFiZeugnis1,
        link: "http://valtek.liveblog365.com/documents/ZeugnisWiFiBelikovaY1.pdf"
    },
    {
        id: "diplomWiFiZeugnis2",
        name: "Diplom WIFI Zeugnis 2",
        preview: diplomWiFiZeugnis2,
        link: "http://valtek.liveblog365.com/documents/ZeugnisWiFiBelikovaY2.pdf"
    },
    {
        id: "diplom",
        name: "Diplom",
        preview: diplom,
        link: "http://valtek.liveblog365.com/documents/DiplomYuliyaVagizova.pdf"
    },
    {
        id: "certificate1",
        name: "Sofya Baburina",
        preview: certificate1,
        link: "http://valtek.liveblog365.com/documents/Certificate1.pdf"
    },
    {
        id: "certificate2",
        name: "Serdar Kambarov",
        preview: certificate2,
        link: "http://valtek.liveblog365.com/documents/Certificate2.pdf"
    },
    {
        id: "referenzKMD",
        name: "Referenz KMD",
        preview: referenzKMD,
        link: "http://valtek.liveblog365.com/documents/Referenz19April2024KMDHerbststrasse.pdf"
    },
    {
        id: "urkunde1",
        name: "Urkunde 1",
        preview: urkunde1,
        link: "http://valtek.liveblog365.com/documents/UrkundeMakeUpSchoolMoskow1.pdf"
    },
    {
        id: "urkunde2",
        name: "Urkunde 2",
        preview: urkunde2,
        link: "http://valtek.liveblog365.com/documents/UrkundeMakeUpSchoolMoskow2.pdf"
    },
    {
        id: "urkunde3",
        name: "Urkunde 3",
        preview: urkunde3,
        link: "http://valtek.liveblog365.com/documents/UrkundeMakeUpSchoolMoskow3.pdf"
    }
]

export default function Documents () {
    let docs = docdata.map ((doc) => { 
        return(
          <Documentcard key={doc.id} name={doc.name} preview={doc.preview} link={doc.link} />
        )
    });

    return(
      <div className="home-services container">
        <div className="row services-tile">
          {docs}
        </div>  
      </div>
    )
}