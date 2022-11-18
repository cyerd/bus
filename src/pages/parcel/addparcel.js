import Head from "next/head";
import React from "react";
import Header from "../../components/Layouts/Header";

export default function addparcel() {
  return (
    <div>
      {/* Page Title */}
      <Head>
        <title>Online Bus Services</title>
        <meta name="description" content="Developed by hudheyfa cyerd" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation bar || header bar  */}
      <Header />
      <div
        className="  padding-0 w-5/12"
        style={{ backgroundColor: "#FBEAD8", padding: 10 }}
      >
        <div className="">
          <div className="flex justify-between">
            <div className="select2-container" id="s2id_currencyId">
              <span>KES - Kenyan shilling</span>
            </div>
            <select
              id="currencyId"
              name="currencyId"
              className="rounded-lg bg-gray-300 p-1"
              tabIndex={-1}
            >
              <option value />
              <option value={1} selected="selected">
                KES - Kenyan shilling
              </option>
              <option value={2}>UGX - Ugandan shilling</option>
              <option value={3}>TZS - Tanzanian shilling </option>
              <option value={4}>RWF - Rwandan franc</option>
              <option value={5}>SDG - Sudanese pound</option>
              <option value={6}>BIF - Burundian franc</option>
              <option value={7}>SSP - South Sudanese Pound</option>
              <option value={8}>USD - US Dollar</option>
            </select>
          </div>
        </div>

        <div
          className="flex"
          style={{ marginTop: 15, fontSize: 15, fontWeight: 700 }}
        >
          <label className="control-label">PARCEL DETAILS</label>
        </div>
        <div
          className="flex justify-between"
          style={{
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: "#fff",
            backgroundColor: "#efecec",
            marginTop: 10,
          }}
        >
          <div
            className="w-full h-full col-span-7"
            style={{ marginTop: 12, fontSize: 10, paddingLeft: 6 }}
          >
            <label className="font-bold text-lg">SOURCE</label>
          </div>
          <div className="" style={{ borderLeft: "3px solid #fff" }}>
            <div className="col-span-12 col-md-6 col-xs-12  padding-0">
              <div className="select2-container" id="s2id_pickup_id">
                <a
                  href="javascript:void(0)"
                  onclick="return false;"
                  className="select2-choice"
                  tabIndex={-1}
                >
                  {" "}
                  <span>GARISSA</span>
                  <abbr
                    className="select2-search-choice-close"
                    style={{}}
                  />{" "}
                  <div>
                    <b />
                  </div>
                </a>
                <input
                  className="select2-focusser select2-offscreen"
                  type="text"
                />
                <div
                  className="select2-drop select2-with-searchbox"
                  style={{ display: "none" }}
                >
                  {" "}
                  <div className="select2-search">
                    {" "}
                    <input
                      type="text"
                      autoComplete="off"
                      className="select2-input"
                    />{" "}
                  </div>{" "}
                  <ul className="select2-results"> </ul>
                </div>
              </div>
              <select
                id="pickup_id"
                name="pickup_id"
                className="select2-offscreen"
                tabIndex={-1}
              >
                <option value />
                <option value={67}>BANGAL</option>
                <option value={19} selected="selected">
                  GARISSA
                </option>
                <option value={60}>KANYONYO</option>
                <option value={63}>KITHIMANI</option>
                <option value={760}>KITHYOKA</option>
                <option value={17}>MATUU</option>
                <option value={18}>MWINGI</option>
                <option value={3}>NAIROBI</option>
                <option value={64}>NGUNI</option>
                <option value={66}>UKASI</option>
              </select>{" "}
            </div>
            <div
              className="col-span-12 col-md-6 col-xs-12  padding-0"
              style={{ borderTop: "5px solid #fff" }}
            >
              <div className="select2-container" id="s2id_pickupLocationId">
                <a
                  href="javascript:void(0)"
                  onclick="return false;"
                  className="select2-choice select2-default"
                  tabIndex={-1}
                >
                  {" "}
                  <span> -- Choose -- </span>
                  <abbr
                    className="select2-search-choice-close"
                    style={{ display: "none" }}
                  />{" "}
                  <div>
                    <b />
                  </div>
                </a>
                <input
                  className="select2-focusser select2-offscreen"
                  type="text"
                />
                <div
                  className="select2-drop select2-with-searchbox"
                  style={{ display: "none" }}
                >
                  {" "}
                  <div className="select2-search">
                    {" "}
                    <input
                      type="text"
                      autoComplete="off"
                      className="select2-input"
                    />{" "}
                  </div>{" "}
                  <ul className="select2-results"> </ul>
                </div>
              </div>
              <select
                id="pickupLocationId"
                name="pickupLocationId"
                className="select2-offscreen"
                tabIndex={-1}
              >
                <option value />
                <option value={2596}>Garissa</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 padding-0"
          style={{
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: "#fff",
            backgroundColor: "#efecec",
            marginTop: 10,
          }}
        >
          <div
            className="col-span-4 col-md-4 col-xs-4  padding-0"
            style={{ marginTop: 15, fontSize: 10, paddingLeft: 6 }}
          >
            <label className="control-label" style={{ fontSize: 12 }}>
              DESTINATION
            </label>
          </div>
          <div
            className="col-span-8 col-md-8 col-xs-8  padding-0"
            style={{ borderLeft: "3px solid #fff" }}
          >
            <div className="col-span-12 col-md-6 col-xs-12  padding-0">
              <div className="select2-container" id="s2id_return_id">
                <a
                  href="javascript:void(0)"
                  onclick="return false;"
                  className="select2-choice select2-default"
                  tabIndex={-1}
                >
                  {" "}
                  <span> -- Choose -- </span>
                  <abbr
                    className="select2-search-choice-close"
                    style={{ display: "none" }}
                  />{" "}
                  <div>
                    <b />
                  </div>
                </a>
                <input
                  className="select2-focusser select2-offscreen"
                  type="text"
                />
                <div
                  className="select2-drop select2-with-searchbox"
                  style={{ display: "none" }}
                >
                  {" "}
                  <div className="select2-search">
                    {" "}
                    <input
                      type="text"
                      autoComplete="off"
                      className="select2-input"
                    />{" "}
                  </div>{" "}
                  <ul className="select2-results"> </ul>
                </div>
              </div>
              <select
                id="return_id"
                name="return_id"
                className="select2-offscreen"
                tabIndex={-1}
              >
                <option value selected="selected" />
                <option value={67}>BANGAL</option>
                <option value={19}>GARISSA</option>
                <option value={60}>KANYONYO</option>
                <option value={63}>KITHIMANI</option>
                <option value={760}>KITHYOKA</option>
                <option value={17}>MATUU</option>
                <option value={18}>MWINGI</option>
                <option value={3}>NAIROBI</option>
                <option value={64}>NGUNI</option>
                <option value={66}>UKASI</option>
              </select>
            </div>
            <div
              className="col-span-12 col-md-6 col-xs-12  padding-0"
              style={{ borderTop: "5px solid #fff" }}
            >
              <div className="select2-container" id="s2id_dropLocationId">
                <a
                  href="javascript:void(0)"
                  onclick="return false;"
                  className="select2-choice select2-default"
                  tabIndex={-1}
                >
                  {" "}
                  <span> -- Choose -- </span>
                  <abbr
                    className="select2-search-choice-close"
                    style={{ display: "none" }}
                  />{" "}
                  <div>
                    <b />
                  </div>
                </a>
                <input
                  className="select2-focusser select2-offscreen"
                  type="text"
                />
                <div
                  className="select2-drop select2-with-searchbox"
                  style={{ display: "none" }}
                >
                  {" "}
                  <div className="select2-search">
                    {" "}
                    <input
                      type="text"
                      autoComplete="off"
                      className="select2-input"
                    />{" "}
                  </div>{" "}
                  <ul className="select2-results"> </ul>
                </div>
              </div>
              <select
                id="dropLocationId"
                name="dropLocationId"
                className="select2-offscreen"
                tabIndex={-1}
              >
                <option value selected="selected" />
              </select>
            </div>
          </div>
        </div>
        <div
          className="col-span-12 padding-0"
          style={{
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: "#fff",
            backgroundColor: "#efecec",
            marginTop: 10,
          }}
        >
          <div
            className="col-span-4 col-md-4 col-xs-4  padding-0"
            style={{ marginTop: 15, fontSize: 15, paddingLeft: 10 }}
          >
            <label className="control-label">SENDER</label>
          </div>
          {/*                           <br/><br/><br/><br/><label class="control-label" style="font-size:15px;color:red;">KRA PIN</label>*/}
          <div
            className="col-span-8 col-md-8 col-xs-8  padding-0"
            style={{ borderLeft: "3px solid #fff" }}
          >
            <div className="col-span-12 col-md-6 col-xs-12  padding-0">
              <input
                type="text"
                id="senderName"
                name="senderName"
                defaultValue
                className="form-control required textOnly"
                maxLength={250}
                size={60}
                placeholder="Sender Name"
              />
            </div>
            <div
              className="col-span-12 col-md-6 col-xs-12  padding-0"
              style={{ borderTop: "5px solid #fff" }}
            >
              <div className="input-group">
                <select
                  name="senderPhoneId"
                  id="senderPhoneId"
                  style={{ width: "35%", height: 30 }}
                  className="form-controls"
                >
                  <option value={254} selected>
                    +254
                  </option>
                  <option value={211}>+211</option>
                  <option value={242}>+242</option>
                  <option value={243}>+243</option>
                  <option value={250}>+250</option>
                  <option value={255}>+255</option>
                  <option value={256}>+256</option>
                  <option value={257}>+257</option>
                </select>
                <input
                  style={{ width: "65%", float: "right" }}
                  type="text"
                  id="Consignment_senderPhone"
                  name="senderPhone"
                  defaultValue
                  className="form-control copassengerInfoMobile required digitOnly notZero"
                  maxLength={10}
                  size={60}
                  autoComplete="off"
                />
              </div>
            </div>
            <input
              type="hidden"
              id="senderId"
              name="senderId"
              defaultValue
              className="form-control required"
              maxLength={150}
              size={60}
              placeholder="Sender Id"
            />
            {/*                            <div class="col-span-12 col-md-6 col-xs-12  padding-0" style="border-top: 5px solid #fff;">
                                                      <input type="text" id="tax_no" name="tax_no" value="" class="form-control" maxlength="250" size="60" placeholder="KRA PIN">
                                                  </div> */}
            <input
              type="hidden"
              id="tax_no"
              name="tax_no"
              defaultValue
              className="form-control"
              maxLength={250}
              size={60}
              placeholder="KRA PIN"
            />
          </div>
        </div>
        <div
          className="col-span-12 padding-0"
          style={{
            borderStyle: "solid",
            borderWidth: 3,
            borderColor: "#fff",
            backgroundColor: "#efecec",
            marginTop: 10,
          }}
        >
          <div
            className="col-span-4 col-md-4 col-xs-4  padding-0"
            style={{ marginTop: 15, fontSize: 15, paddingLeft: 6 }}
          >
            <label className="control-label">RECEIVER</label>
          </div>
          <div
            className="col-span-8 col-md-8 col-xs-8  padding-0"
            style={{ borderLeft: "3px solid #fff" }}
          >
            <div className="col-span-12 col-md-6 col-xs-12  padding-0">
              <input
                type="text"
                id="toName"
                name="toName"
                defaultValue
                className="form-control required textOnly"
                maxLength={250}
                size={60}
                placeholder="Receiver Name"
              />{" "}
              <div className="input-group"></div>
              <div
                className="col-span-12 col-md-6 col-xs-12  padding-0"
                style={{ borderTop: "5px solid #fff" }}
              >
                <select
                  name="toPhoneId"
                  id="toPhoneId"
                  style={{ width: "35%", height: 30 }}
                  className="form-controls pj-form-field-before w100 pj-form-field-icon-text"
                >
                  <option value={254} selected>
                    +254
                  </option>
                  <option value={211}>+211</option>
                  <option value={242}>+242</option>
                  <option value={243}>+243</option>
                  <option value={250}>+250</option>
                  <option value={255}>+255</option>
                  <option value={256}>+256</option>
                  <option value={257}>+257</option>
                </select>
                <input
                  style={{ width: "65%", float: "right" }}
                  type="text"
                  id="toPhone"
                  name="toPhone"
                  defaultValue
                  className="form-control required copassengerReceiverInfoMobile digitOnly notZero"
                  maxLength={10}
                  size={60}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
