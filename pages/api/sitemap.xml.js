import {SitemapStream, streamToPromise} from "sitemap";
import {Readable} from "stream";

export default async (req, res) => {
    // Listado de tus páginas
    const sitemap = [{
        url: "/",
        changefreq: "monthly",
        priority: 1.0
    }, {
        url: "/accidentes-de-trabajo-art",
        changefreq: "monthly",
        priority:1
    },
    {
      url: "/accidentes-de-transito",
      changefreq: "monthly",
      priority: 1
  },
    {
      url: "/despidos",
      changefreq: "monthly",
      priority: 1
  },
    {
      url: "/enfermedades-profesionales",
      changefreq: "monthly",
      priority: 1
  },
  ];
    const sitemapStream = new SitemapStream({
        hostname: 'https://lexabogados.com.ar'
    });
    res.writeHead(200, {
        "Content-Type": "application/xml"
    });
    const xmlString = await streamToPromise(
        Readable
            .from(sitemap)
            .pipe(sitemapStream)
    ).then(
        (data) => data.toString()
    );
    res.end(xmlString);
};