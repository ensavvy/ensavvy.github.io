import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import PKG from '../../package.json';
import styles from './index.module.css';

import ReactIcon from '@site/static/img/assets/icons/react.svg';
import VueIcon from '@site/static/img/assets/icons/vue.svg';
import TypescriptIcon from '@site/static/img/assets/icons/typescript.svg';
import ReduxIcon from '@site/static/img/assets/icons/redux.svg';
import LaravelIcon from '@site/static/img/assets/icons/laravel.svg';
import SymfonyIcon from '@site/static/img/assets/icons/symfony.svg';
import NodeJsIcon from '@site/static/img/assets/icons/nodejs.svg';
import RailsIcon from '@site/static/img/assets/icons/rails.svg';
import ServerlessIcon from '@site/static/img/assets/icons/serverless.svg';
import GraphqlIcon from '@site/static/img/assets/icons/graphql.svg';
import RestApiIcon from '@site/static/img/assets/icons/rest-api.svg';
import ReactNativeIcon from '@site/static/img/assets/icons/react-native.svg';
import IonicIcon from '@site/static/img/assets/icons/ionic.svg';
import PhotoshopIcon from '@site/static/img/assets/icons/photoshop.svg';
import FigmaIcon from '@site/static/img/assets/icons/figma.svg';
import TailwindCssIcon from '@site/static/img/assets/icons/tailwindcss.svg';
import BootstrapIcon from '@site/static/img/assets/icons/bootstrap5.svg';
import MaterialUiIcon from '@site/static/img/assets/icons/material-ui.svg';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main id="Welcome">
        <section id="WelcomeJumbotron" className="relative mt-12 mb-6">
          <div className="container max-w-screen-xl mx-auto px-6 relative z-1">
            <div className="flex flex-wrap -mx-6 justify-center">
              <div className="w-full lg:w-6/12 px-6">

                <p className="text-xl font-light mb-8">{siteConfig.tagline}</p>

                <div id="accordion" className="accordion pl-14">
                  <div
                    className="rounded-t-lg"
                  >
                    <h2 className="mb-0" id="headingWebDevelopment">
                      <button
                        className="accordion-button group relative flex font-display tracking-tight w-full items-center rounded-t-[15px] border-0 py-2 text-left text-3xl text-opacity-70 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white [&:not([data-te-collapse-collapsed])]:text-primary"
                        type="button"
                        data-te-collapse-init
                        data-te-target="#collapseWebDevelopment"
                        aria-expanded="true"
                        aria-controls="collapseWebDevelopment"
                      >
                        Web Development
                        <span
                          className="absolute -left-10 top-1 h-6 w-6 shrink-0 rotate-0 fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:-left-12 group-[[data-te-collapse-collapsed]]:top-3 group-[[data-te-collapse-collapsed]]:rotate-[-90deg] group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseWebDevelopment"
                      className="!visible"
                      data-te-collapse-item
                      data-te-collapse-show
                      aria-labelledby="headingOne"
                      data-te-parent="#accordion"
                    >
                      <div className="py-6">
                        <div className="mb-6 -mx-2">
                          <span className="h-8 inline-block mx-2 mb-2">
                            <ReactIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <VueIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <TypescriptIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <ReduxIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <LaravelIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <SymfonyIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <NodeJsIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <RailsIcon className="h-8 w-20" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <ServerlessIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <GraphqlIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <RestApiIcon className="h-8 w-8" />
                          </span>
                        </div>

                        We specialize in Web Application Development, APIs, Mobile Development, UI/UX Design
                        and Branding.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="mb-0" id="headingMobileDevelopment">
                      <button
                        className="accordion-button group relative flex w-full font-display tracking-tight items-center rounded-none border-0 py-2 text-left text-3xl text-opacity-70 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseMobileDevelopment"
                        aria-expanded="false"
                        aria-controls="collapseMobileDevelopment"
                      >
                        Mobile Development
                        <span
                          className="absolute -left-10 top-1 h-6 w-6 shrink-0 rotate-0 fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:-left-12 group-[[data-te-collapse-collapsed]]:top-3 group-[[data-te-collapse-collapsed]]:rotate-[-90deg] group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseMobileDevelopment"
                      className="!visible hidden"
                      data-te-collapse-item
                      aria-labelledby="headingMobileDevelopment"
                      data-te-parent="#accordion"
                    >
                      <div className="p-6">
                        <div className="mb-6 -mx-2">
                          <span className="h-8 inline-block mx-2 mb-2">
                            <ReactNativeIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <IonicIcon className="h-8 w-8" />
                          </span>
                        </div>

                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                        heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header mb-0" id="headingUIUXDesign">
                      <button
                        className="accordion-button group relative flex font-display tracking-tight w-full items-center rounded-t-[15px] py-2 text-left text-3xl text-opacity-70 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:text-white"
                        type="button"
                        data-te-collapse-init
                        data-te-collapse-collapsed
                        data-te-target="#collapseUIUXDesign"
                        aria-expanded="false"
                        aria-controls="collapseUIUXDesign"
                      >
                        UI/UX Design
                        <span
                          className="absolute -left-10 top-1 h-6 w-6 shrink-0 rotate-0 fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:-left-12 group-[[data-te-collapse-collapsed]]:top-3 group-[[data-te-collapse-collapsed]]:rotate-[-90deg] group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                    </h2>
                    <div
                      id="collapseUIUXDesign"
                      className="!visible hidden"
                      data-te-collapse-item
                      aria-labelledby="headingUIUXDesign"
                      data-te-parent="#accordion"
                    >
                      <div className="p-6">
                        <div className="mb-6 -mx-2">
                          <span className="h-8 inline-block mx-2 mb-2">
                            <PhotoshopIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <FigmaIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <TailwindCssIcon className="h-8 w-20" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <BootstrapIcon className="h-8 w-8" />
                          </span>
                          <span className="h-8 inline-block mx-2 mb-2">
                            <MaterialUiIcon className="h-8 w-8" />
                          </span>
                        </div>

                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                        3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                        laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin
                        coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
                        occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                        heard of them accusamus labore sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-6">
                <div className="mb-12 text-center">
                  <h1 className="text-6xl text-center mb-4 text-cyan-700 font-brand mt-16">
                    <img src={require('@site/static/img/assets/jumbotron1.png').default} alt="Logo" className="inline-block" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 mb-16">
          <HomepageFeatures />
        </section>

        <header className="patterns-hero-bank-note py-8 lg:py-16 text-center relative overflow-hidden dark:bg-gray-800 hidden">
          <div className="container">
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Docusaurus Tutorial - 5min ⏱️
              </Link>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  );
}
