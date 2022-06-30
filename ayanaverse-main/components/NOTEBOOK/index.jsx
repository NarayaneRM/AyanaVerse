import React from "react";
import Group12 from "../Group12";
import Group21 from "../Group21";
import ProjectsBottom from "../ProjectsBottom";
import CoursesBottom from "../CoursesBottom";
import NftViewBottom from "../NftViewBottom";
import CalendarBottom from "../CalendarBottom";
import ReportsBottom from "../ReportsBottom";
import "./NOTEBOOK.css";

function NOTEBOOK(props) {
  const {
    dao_Blockchain_Projects1,
    dao_Blockchain_Projects2,
    graph2,
    course_Topics1,
    course_Description1,
    percent1,
    course_Topics2,
    course_Description2,
    percent2,
    course_Topics3,
    course_Description3,
    percent3,
    dao_Blockchain_Projects3,
    dao_Blockchain_Projects4,
    report_Topics1,
    report_Description1,
    report_Topics2,
    report_Description2,
    report_Topics3,
    report_Description3,
    report_Topics4,
    report_Description4,
    report_Topics5,
    report_Description5,
    report_Topics6,
    report_Description6,
    report_Topics7,
    report_Description7,
    report_Topics8,
    report_Description8,
    report_Topics9,
    report_Description9,
    redes_Socias1,
    redes_Socias2,
    redes_Socias3,
    dao_Blockchain_Projects5,
    dao_Blockchain_Projects6,
    number1,
    title1,
    status1,
    number2,
    title2,
    status2,
    number3,
    title3,
    status3,
    number4,
    title4,
    status4,
    defi_Blockchain_Projects,
    number5,
    title5,
    status5,
    number6,
    title6,
    status6,
    number7,
    title7,
    status7,
    number8,
    title8,
    status8,
    nft_Blockchain_Projects,
    number9,
    title9,
    status9,
    number10,
    title10,
    status10,
    number11,
    title11,
    status11,
    number12,
    title12,
    fullStackNftMarke,
    status12,
    dao_Blockchain_Projects7,
    eth1,
    surname1,
    collection1,
    number13,
    value1,
    number14,
    number15,
    eth2,
    surname2,
    collection2,
    number16,
    value2,
    number17,
    number18,
    eth3,
    surname3,
    collection3,
    number19,
    value3,
    number20,
    number21,
    eth4,
    surname4,
    collection4,
    number22,
    value4,
    number23,
    number24,
    eth5,
    surname5,
    collection5,
    number25,
    value5,
    number26,
    number27,
    eth6,
    surname6,
    collection6,
    number28,
    value6,
    number29,
    number30,
    eth7,
    surname7,
    collection7,
    number31,
    value7,
    number32,
    number33,
    eth8,
    surname8,
    collection8,
    number34,
    value8,
    number35,
    number36,
    dao_Blockchain_Projects8,
    spanText1,
    spanText2,
    ayana_Droid,
    ayana_Verse1,
    group12Props,
    group211Props,
    group212Props,
    group213Props,
    group214Props,
    group215Props,
    group216Props,
    group217Props,
    group218Props,
    group219Props,
    projectsBottomProps,
    coursesBottomProps,
    nftViewBottomProps,
    calendarBottomProps,
    reportsBottomProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="notebook screen">
        <div className="overlap-group16-1">
          <div className="background-1"></div>
          <div className="rectangle-1-1"></div>
          <div className="courses_page-1 spinnaker-normal-white-30px" id="courses_page">
            <div className="dao_blockchain_projects-13">{dao_Blockchain_Projects1}</div>
            <div className="flex-col-5">
              <div className="dao_blockchain_projects-14">{dao_Blockchain_Projects2}</div>
              <img className="graph2-1" src={graph2} />
              <div className="overlap-group3-1 border-1px-onahau">
                <div className="course_-container-1">
                  <div className="course_topics-1 spinnaker-normal-white-14px">{course_Topics1}</div>
                  <div className="course_description-1 spinnaker-normal-white-10px">{course_Description1}</div>
                </div>
                <div className="overlap-group-12">
                  <div className="percent-1 spinnaker-normal-persian-indigo-12px">{percent1}</div>
                </div>
              </div>
              <div className="overlap-group2 border-1px-onahau">
                <div className="course_-container-1">
                  <div className="course_topics-1 spinnaker-normal-white-14px">{course_Topics2}</div>
                  <div className="course_description-1 spinnaker-normal-white-10px">{course_Description2}</div>
                </div>
                <div className="overlap-group-7">
                  <div className="percent-1 spinnaker-normal-persian-indigo-12px">{percent2}</div>
                </div>
              </div>
              <div className="overlap-group1-4 border-1px-onahau">
                <div className="course_-container-1">
                  <div className="course_topics-1 spinnaker-normal-white-14px">{course_Topics3}</div>
                  <div className="course_description-1 spinnaker-normal-white-10px">{course_Description3}</div>
                </div>
                <div className="overlap-group-7">
                  <div className="percent-1 spinnaker-normal-persian-indigo-12px">{percent3}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-group4-1">
            <div className="dao_blockchain_projects-15 spinnaker-normal-white-20px">{dao_Blockchain_Projects3}</div>
          </div>
          <Group12 className={group12Props.className} />
          <div className="reports_page-1" id="reports_page">
            <div className="overlap-group9">
              <div className="dao_blockchain_projects-16 spinnaker-normal-white-30px">{dao_Blockchain_Projects4}</div>
              <div className="flex-row-3">
                <div className="overlap-group-container-5">
                  <div className="report_-container-2 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics1}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description1}</p>
                  </div>
                  <div className="report_-container-3 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics2}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description2}</p>
                  </div>
                  <div className="report_-container-3 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics3}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description3}</p>
                  </div>
                  <div className="report_-container-3 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics4}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description4}</p>
                  </div>
                </div>
                <div className="overlap-group-container-6">
                  <div className="report_-container-2 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics5}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description5}</p>
                  </div>
                  <div className="report_-container-3 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics6}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description6}</p>
                  </div>
                  <div className="report_-container-3 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics7}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description7}</p>
                  </div>
                  <div className="report_-container-3 border-1px-onahau">
                    <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics8}</div>
                    <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description8}</p>
                  </div>
                </div>
              </div>
              <div className="report_-container-4 border-1px-onahau">
                <div className="report_topics-1 spinnaker-normal-onahau-12px">{report_Topics9}</div>
                <p className="report_description-1 spinnaker-normal-onahau-8px">{report_Description9}</p>
              </div>
            </div>
          </div>
          <div className="foot-1">
            <div className="redes_socias-container-1">
              <a href="https://www.linkedin.com/in/narayanerm/" target="_blank">
                <img className="redes_socias-1-1" src={redes_Socias1} />
              </a>
              <a href="https://github.com/NarayaneRM" target="_blank">
                <img className="redes_socias-2-1" src={redes_Socias2} />
              </a>
              <a href="https://www.facebook.com/narayane.ribeiromedeiros/" target="_blank">
                <img className="redes_socias-3-1" src={redes_Socias3} />
              </a>
            </div>
          </div>
          <div className="projects_page-1" id="projects_page">
            <div className="overlap-group12-1">
              <div className="dao_blockchain_projects-17 spinnaker-normal-white-30px">{dao_Blockchain_Projects5}</div>
              <div className="flex-row-4">
                <div className="flex-col-6">
                  <div className="dao_blockchain_projects-18 spinnaker-normal-white-14px">
                    {dao_Blockchain_Projects6}
                  </div>
                  <div className="overlap-group-8 border-1px-onahau">
                    <div className="number-7 spinnaker-normal-white-14px">{number1}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title1}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status1}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-8 spinnaker-normal-white-14px">{number2}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title2}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status2}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-8 spinnaker-normal-white-14px">{number3}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title3}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status3}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-9 spinnaker-normal-white-14px">{number4}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title4}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status4}</div>
                  </div>
                </div>
                <div className="flex-col-7">
                  <div className="defi_blockchain_projects-1 spinnaker-normal-white-14px">
                    {defi_Blockchain_Projects}
                  </div>
                  <div className="overlap-group-8 border-1px-onahau">
                    <div className="number-7 spinnaker-normal-white-14px">{number5}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title5}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status5}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-8 spinnaker-normal-white-14px">{number6}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title6}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status6}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-8 spinnaker-normal-white-14px">{number7}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title7}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status7}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-9 spinnaker-normal-white-14px">{number8}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title8}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status8}</div>
                  </div>
                </div>
                <div className="flex-col-8">
                  <div className="nft_blockchain_projects-1 spinnaker-normal-white-14px">{nft_Blockchain_Projects}</div>
                  <div className="overlap-group8-1 border-1px-onahau">
                    <div className="number-7 spinnaker-normal-white-14px">{number9}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title9}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status9}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-8 spinnaker-normal-white-14px">{number10}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title10}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status10}</div>
                  </div>
                  <div className="overlap-group-9 border-1px-onahau">
                    <div className="number-8 spinnaker-normal-white-14px">{number11}</div>
                    <p className="title-2 spinnaker-normal-onahau-9px">{title11}</p>
                    <div className="status-2 spinnaker-normal-amethyst-9px">{status11}</div>
                  </div>
                  <div className="overlap-group11-1 border-1px-onahau">
                    <div className="number-13 spinnaker-normal-white-14px">{number12}</div>
                    <div className="overlap-group-13 spinnaker-normal-onahau-9px">
                      <div className="title-3">{title12}</div>
                      <p className="full-stack-nft-marke-1">{fullStackNftMarke}</p>
                    </div>
                    <div className="status-3 spinnaker-normal-amethyst-9px">{status12}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nftview_page-1" id="nftview_page">
            <div className="overlap-group13-1">
              <div className="dao_blockchain_projects-19 spinnaker-normal-white-30px">{dao_Blockchain_Projects7}</div>
              <div className="overlap-group-container-7">
                <div className="overlap-group-10">
                  <img className="eth-8" src={eth1} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname1}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection1}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number13}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value1}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number14}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number15}</div>
                </div>
                <div className="overlap-group-11">
                  <img className="eth-9" src={eth2} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname2}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection2}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number16}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value2}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number17}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number18}</div>
                </div>
                <div className="overlap-group-11">
                  <img className="eth-10" src={eth3} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname3}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection3}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number19}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value3}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number20}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number21}</div>
                </div>
              </div>
              <div className="overlap-group-container-8">
                <div className="overlap-group3-2">
                  <img className="eth-11" src={eth4} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname4}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection4}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number22}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value4}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number23}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number24}</div>
                </div>
                <div className="overlap-group4-2">
                  <img className="eth-12" src={eth5} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname5}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection5}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number25}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value5}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number26}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number27}</div>
                </div>
                <div className="overlap-group-11">
                  <img className="eth-13" src={eth6} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname6}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection6}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number28}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value6}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number29}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number30}</div>
                </div>
              </div>
              <div className="overlap-group-container-9">
                <div className="overlap-group-10">
                  <img className="eth-14" src={eth7} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname7}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection7}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number31}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value7}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number32}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number33}</div>
                </div>
                <div className="overlap-group-11">
                  <img className="eth-15" src={eth8} />
                  <div className="nft_card-1 border-1px-onahau"></div>
                  <div className="surname-1 spinnaker-normal-onahau-8px">{surname8}</div>
                  <div className="collection-1 spinnaker-normal-onahau-8px">{collection8}</div>
                  <div className="number-10 spinnaker-normal-onahau-10px">{number34}</div>
                  <div className="value-1 spinnaker-normal-onahau-10px">{value8}</div>
                  <div className="rectangle-38-1"></div>
                  <p className="number-11 spinnaker-normal-onahau-6px">{number35}</p>
                  <div className="number-12 spinnaker-normal-onahau-10px">{number36}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="calendar_page-1" id="calendar_page">
            <div className="overlap-group14">
              <div className="dao_blockchain_projects-20 spinnaker-normal-white-30px">{dao_Blockchain_Projects8}</div>
              <Group21 className={group211Props.className} />
              <Group21 className={group212Props.className} />
              <Group21 className={group213Props.className} />
              <Group21 className={group214Props.className} />
              <Group21 className={group215Props.className} />
              <Group21 className={group216Props.className} />
              <Group21 className={group217Props.className} />
              <Group21 className={group218Props.className} />
              <Group21 className={group219Props.className} />
            </div>
          </div>
          <div className="overlap-group15-1">
            <div className="dao_blockchain_projects-21 spinnaker-normal-white-20px">
              <span className="spinnaker-normal-white-20px">{spanText1}</span>
              <span className="spinnaker-normal-white-20px">{spanText2}</span>
            </div>
          </div>
          <img className="ayana_droid-1" src={ayana_Droid} />
        </div>
        <div className="rectangle-2-1"></div>
        <a href="https://github.com/NarayaneRM" target="_blank">
          <img className="ayana_verse-1-1" src={ayana_Verse1} />
        </a>
        <ProjectsBottom className={projectsBottomProps.className} />
        <CoursesBottom className={coursesBottomProps.className} />
        <NftViewBottom className={nftViewBottomProps.className} />
        <CalendarBottom className={calendarBottomProps.className} />
        <ReportsBottom className={reportsBottomProps.className} />
      </div>
    </div>
  );
}

export default NOTEBOOK;
