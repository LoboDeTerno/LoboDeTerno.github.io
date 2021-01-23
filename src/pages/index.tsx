import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { graphql, useStaticQuery } from "gatsby";
import LoboSide from "../assets/images/loboside.webp";
import { SQHome } from "../graphql";
import PostCard from "../components/PostCard";

const Home: React.FC = () => {
    const pageData = useStaticQuery<SQHome>(graphql`
        query Posts {
            allMdx(
                sort: { fields: frontmatter___date, order: DESC }
                limit: 10
                filter: { frontmatter: { title: { ne: "__dummy__" } } }
            ) {
                edges {
                    node {
                        slug
                        id
                        frontmatter {
                            autoThumbnailImage
                            coverImage
                            date
                            description
                            thumbnailImage
                            thumbnailImagePosition
                            title
                            categories
                            keywords
                            tags
                        }
                    }
                }
            }
        }
    `);

    const posts = useMemo(() => pageData.allMdx.edges.map((p) => p.node), [
        pageData,
    ]);

    return (
        <>
            <header className="bg-black text-white">
                <section className="flex flex-col divide-y max-w-4xl m-auto">
                    <span className="block mx-auto mt-8 mb-4 text-2xl font-bold uppercase">
                        Lobo de Terno
                    </span>
                    <section className="grid grid-cols-header py-4 text-sm">
                        <div className="" />
                        <nav className="flex justify-center space-x-5">
                            <a href="/" className="block">
                                Página Inicial
                            </a>
                            <a href="/top" className="block">
                                Mais Vistos
                            </a>
                            <a href="/blog" className="block">
                                Publicações
                            </a>
                        </nav>
                        <nav className="flex justify-end">
                            <a
                                href="https://www.instagram.com/lobodeterno/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </a>
                        </nav>
                    </section>
                </section>
            </header>
            <section className="bg-black text-white">
                <div className="max-w-4xl mx-auto flex py-16">
                    <main className="my-14 max-w-xl">
                        <h1 className="text-8xl uppercase ">
                            Bem-vindo ao Lobo de Terno
                        </h1>
                        <p>
                            Um blog alimentado com conteúdo exclusivo do mundo
                            geek! Cinema, séries, quadrinhos e jogos, você
                            encontra aqui com a melhor qualidade.
                        </p>
                    </main>
                    <aside>
                        <img src={LoboSide} alt="Logo do lobo de terno" />
                    </aside>
                </div>
            </section>
            <section>
                <h3>Mais Vistos</h3>
            </section>
            <section>
                <h3>Publicações</h3>
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        frontmatter={post.frontmatter}
                        slug={post.slug}
                        id={post.id}
                    />
                ))}
            </section>
            <footer className="bg-black text-white text-center text-xs py-8">
                ©2021 Lobo de Terno. Developed with much{" "}
                <span role="img" aria-label="coffee">
                    ☕
                </span>{" "}
                by Enzo Coelho Albornoz
            </footer>
        </>
    );
};

export default Home;
