import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartPie,
  faRocket,
  faFilePdf,
  faBox,
  faUser,
  faPercent,
  faUsers,
  faFilePen,
  faDatabase,
  faCalendarDays,
  faArrowsRotate,
  faArrowRightArrowLeft,
  faChartSimple,
  faThumbsUp,
  faThumbsDown,
  faDownLong
} from "@fortawesome/free-solid-svg-icons";
import "./screenone.css";
import ChartRight from "./chartright";
const Screen = () => {
  const data = [
    "تقارير المصروفات",
    "تقارير الايرادات",
    "تقارير المستخدمين",
    "تقارير الطلبه",
    "تقارير الفواتير",
  ];
  return (
    <>
      <h3 className="text-center py-3 my-title">اداره النظام</h3>
      <div className="sub-title container py-2">
        <h5 className="d-inline px-3">اداره النظام</h5>
        <FontAwesomeIcon icon={faChartPie} style={{ color: "#124759" }} />
      </div>
      <div className="container-fluid">
        <div className="row justify-content-around">
          <div className="left-side col-lg-6 col-10 mt-3">
            <div className="left-side-top">
              <h5 className="d-inline px-3">اجراءات عاجله</h5>
              <FontAwesomeIcon icon={faRocket} style={{ color: "#124759" }} />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="reports col-md-4 col-12 py-3">
                  {data.map((i) => {
                    return (
                      <div className="container text-end reports-hover">
                        <div className="row justify-content-around">
                          <p className="col-8">{i}</p>
                          <FontAwesomeIcon
                            icon={faFilePdf}
                            style={{ color: "#124759", cursor: "pointer" }}
                            className="col-1 mt-1"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="options col-md-8 col-12 py-3 overflow-x-auto">
                  <table className="text-center m-auto">
                    <tr>
                      <td>
                        <FontAwesomeIcon
                          icon={faBox}
                          className="options-icon"
                        />
                        <h5 className="py-2">اضافه خدمات</h5>
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faDatabase}
                          className="options-icon"
                        />
                        <h5 className="py-2">تسجيل مصروف</h5>
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faUser}
                          className="options-icon"
                        />
                        <h5 className="py-2">اضافه مستخدم</h5>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <FontAwesomeIcon
                          icon={faFilePen}
                          className="options-icon"
                        />
                        <h5 className="py-2">المحاسبه</h5>
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faUsers}
                          className="options-icon"
                        />
                        <h5 className="py-2">تسجيل طالب</h5>
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faPercent}
                          className="options-icon"
                        />
                        <h5 className="py-2">معدلات الضريبه</h5>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className=" right-side col-lg-5 col-10 mt-3 ">
            <div className="container text-end right-side-top">
              <div className="row justify-content-around py-1">
                <div className="col-3 text-start">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{
                      color: "#124759",
                      cursor: "pointer",
                      paddingRight: "10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    style={{
                      color: "#124759",
                      cursor: "pointer",
                      paddingRight: "10px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faArrowRightArrowLeft}
                    style={{
                      color: "#124759",
                      cursor: "pointer",
                      paddingRight: "10px",
                    }}
                  />
                </div>
                <div className="col-9">
                  <h5 className="d-inline mx-1">
                    الاجماللى للفواتير مقابل الاجمالى للدفع
                  </h5>
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    style={{ color: "#124759", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
            <div className="mychart">
                <ChartRight/>
            </div>
          </div>
        </div>
        <div className="row justify-content-around mt-3">
          <div className=" right-side sec-two col-lg-6 col-10 mt-3">
            <div className="container text-end right-side-top">
              <div className="row justify-content-between py-1 align-items-center">
                <div className="col-3 text-start">
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    style={{
                      color: "#124759",
                      cursor: "pointer",
                      paddingRight: "10px",
                    }}
                  />
                </div>
                <div className="col-8">
                  <h5 className="d-inline mx-3">الافرع الاكثر نشاطا</h5>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: "#124759", cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" right-side sec-two col-lg-5 col-10 mt-3">
            <div className="container text-end right-side-top">
              <div className="row justify-content-between py-1 align-items-center">
                <div className="col-2 text-start">
                  <FontAwesomeIcon
                    icon={faArrowsRotate}
                    style={{
                      color: "#124759",
                      cursor: "pointer",
                      paddingRight: "10px",
                    }}
                  />
                </div>
                <div className="col-10">
                      <h5 className="d-inline mx-3">
                        اعلى المصاريف حسب التصنيف
                      </h5>
                      <FontAwesomeIcon
                        icon={faThumbsDown}
                        style={{ color: "#124759", cursor: "pointer" }}
                      />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="info-items text-end col-lg-2 col-md-5 col-7 mt-3 me-3">
                <h3 className="text-danger" >4400 pounds</h3>
                <h4 className="text-danger">نقد</h4>
                <p>
                26.5% <FontAwesomeIcon icon={faDownLong} color="red"/>
                </p>
                <p>past 9000 pounds /last month 3000 pounds</p>
            </div>
            <div className="info-items text-end col-lg-2 col-md-5 col-7 mt-3 me-3">
                <h3 className="text-primary" >4400 pounds</h3>
                <h4 className="text-primary">ايرادات</h4>
                <p>
                26.5% <FontAwesomeIcon icon={faDownLong} color="red"/>
                </p>
                <p>past 9000 pounds /last month 3000 pounds</p>
            </div>
            <div className="info-items text-end col-lg-2 col-md-5 col-7 mt-3 me-3">
                <h3 className="text-success" >4400 pounds</h3>
                <h4 className="text-success">النفقات</h4>
                <p>
                26.5% <FontAwesomeIcon icon={faDownLong} color="red"/>
                </p>
                <p>past 9000 pounds /last month 3000 pounds</p>
            </div>
            <div className="info-items text-end col-lg-2 col-md-5 col-7 mt-3 me-3">
                <h3 className="text-info" >4400 pounds</h3>
                <h4 className="text-info">الارباح</h4>
                <p>
                26.5% <FontAwesomeIcon icon={faDownLong} color="red"/>
                </p>
                <p>past 9000 pounds /last month 3000 pounds</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Screen;
