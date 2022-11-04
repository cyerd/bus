import React from "react";

export default function Triptest() {
  return (
    <div>
      <div>
        <table className="text-sm  font-sans w-full">
          <thead>
            <tr>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <input type="checkbox" />
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <div>Tripcode</div>
                <div>
                  <a href="#" />
                  <a href="#" />
                </div>
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <div>Fleet</div>
                <div>
                  <a href="#" />
                  <a href="#" />
                </div>
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <div>Series</div>
                <div>
                  <a href="#" />
                  <a href="#" />
                </div>
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <div>Route</div>
                <div>
                  <a href="#" />
                  <a href="#" />
                </div>
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <div>Depart - Arrive</div>
                <div>
                  <a href="#" />
                  <a href="#" />
                </div>
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <div>Operates From - To (dates)</div>
                <div>
                  <a href="#" />
                  <a href="#" />
                </div>
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold">
                <div>Status</div>
                <div>
                  <a href="#" />
                  <a href="#" />
                </div>
              </th>
              <th className="border-2 border-gray-200 bg-gray-300 p-2 font-bold"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 text-md border border-gray-200">
                <input type="checkbox" name="record[]" defaultValue={4785} />
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>GRS - NRB</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>44 seater</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>A</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>GARISSA - NAIROBI</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>06:30 AM - 01:20 PM</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>21-03-2020 - 31-12-2022</span>
              </td>
              <td className="p-3 text-md border border-gray-200 pj-table-cell-editable">
                <span>Active</span>
                <select data-name="isActive" style={{ display: "none" }}>
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <a href="index.php?controller=pjAdminBuses&action=pjActionTime&id=4785">
                  <span className="glyphicon glyphicon-pencil icon-margin" />
                </a>
                <a href="#">
                  More
                  <span />
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-3 text-md border border-gray-200">
                <input type="checkbox" name="record[]" defaultValue={4786} />
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>GRS - NRB</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>44 seater</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>B</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>GARISSA - NAIROBI</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>04:00 PM - 10:50 PM</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>21-03-2020 - 31-03-2025</span>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <span>Active</span>
                <select data-name="isActive" style={{ display: "none" }}>
                  <option value={1}>Active</option>
                  <option value={0}>Inactive</option>
                </select>
              </td>
              <td className="p-3 text-md border border-gray-200">
                <a href="index.php?controller=pjAdminBuses&action=pjActionTime&id=4786">
                  <span className="glyphicon glyphicon-pencil icon-margin " />
                </a>
                <a href="#">
                  More
                  <span />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
