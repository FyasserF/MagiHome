import './BestProduct.css'
import { useRef } from 'react';
import { useScroll, useTransform, motion as m } from 'framer-motion';
import Picture1 from '/images/BestProductsImages/IMG1.png';
import Picture2 from '/images/BestProductsImages/IMG2.png';
import Picture3 from '/images/BestProductsImages/IMG3.png';
import Picture4 from '/images/BestProductsImages/IMG4.png';
import Picture5 from '/images/BestProductsImages/IMG5.png';
import Picture6 from '/images/BestProductsImages/IMG6.png'
import Picture7 from '/images/BestProductsImages/IMG7.png'


export default function BestProduct() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale1 = useTransform(scrollYProgress, [0, 1], [1, .4]);
    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const moveX1 = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const pictures = [
        {
            src: Picture1,
            scale: scale4
        },
        {
            src: Picture2,
            scale: scale5
        },
        {
            src: Picture3,
            scale: scale6
        },
        {
            src: Picture4,
            scale: scale5
        },
        {
            src: Picture5,
            scale: scale6
        },
        {
            src: Picture6,
            scale: scale8
        },
        {
            src: Picture7,
            scale: scale9
        }
    ]


    return (
        <div className="best-product">
            <m.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut" }} s
            >
                Nos meillieurs produits
            </m.h2>
            <div ref={container} className='best-product-wrraper'>
                <div className='sticky'>
                    {
                        pictures.map(({ src, scale }, index) => {
                            return <m.div key={index} style={{ scale }} className='el'>
                                <div className='imageContainer'>
                                    <m.img

                                        style={index === 0 ? { scale: scale1, x: moveX1 } : {}}
                                        src={src}
                                        alt="image"
                                    ></m.img>
                                    {index === 0 ?
                                        <m.div
                                            className='text-wrraper'
                                            style={{ opacity: opacity, x: moveX1 }}
                                        >
                                            <h3>Le robot multifonction</h3>
                                            <p>votre cuisine parfaite. Equipé d'un mixeur d'une capacité de 1,8 litres, il permet de préparer une large gamme de recettes, smoothies, soupes et sauces. D'une capacité de 1,2 L, il offre beaucoup d'espace pour préparer vos plats, et avec 3 lames et 5 fonctions différentes pour vous offrir une flexibilité parfaite pour s'adapter à une variété de cuisines différentes, ce robot multifonction est conçu pour vous faciliter la vie cuisine plus facile.</p>
                                        </m.div>
                                        :
                                        ''}
                                </div>
                            </m.div>
                        })
                    }
                </div>
            </div>
        </div >

    )
}