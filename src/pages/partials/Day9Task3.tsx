import A from "../../components/A";
import Box from "../../components/Box";
import TextInput from "../../components/TextInput";

export default function Day9Task3() {
  return (
    <>
      <h2>Random geometry quiz</h2>
      <p>
        Data are fetched from{" "}
        <A blank href="http://geodb-cities-api.wirefreethought.com/">
          GeoDB Cities API
        </A>
        . Note: there is a daily request limit of 86k.
      </p>
      <Box>
        <div id="control">
          <div className="mb-2 font-bold text-2xl">Question types</div>
          <div className="border px-4 py-2">
            <div className="">
              <label className="flex items-center">
                <input type="checkbox" />
                <span className="ml-2">Country from various information</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="label-transparent" />
                <span className="ml-2 label-transparent">
                  Capital from country
                </span>
              </label>
              <label className="flex items-center opacity-low">
                <input type="checkbox" />
                <span className="ml-2">City from country</span>
              </label>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}
