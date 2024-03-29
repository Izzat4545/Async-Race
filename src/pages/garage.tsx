import React, { useRef, useState } from "react";
import { RGBColor } from "react-color";
import ColorPicker from "../components/colorPicker";
import useClickOutside from "../hooks/useClickOutside";
import useFetch from "../hooks/useFetch";
import { garage } from "../interfaces/garage";

const Garage = () => {
  const [createColor, setCreateColor] = useState<RGBColor>({
    r: 55,
    g: 214,
    b: 122,
  });
  const [updateColor, setUpdateColor] = useState<RGBColor>({
    r: 55,
    g: 214,
    b: 122,
  });
  const {
    data: garage,
    isLoading,
    error,
  } = useFetch<garage[]>("garage", "GET");
  const createRef = useRef<HTMLDivElement>(null);
  const updateRef = useRef<HTMLDivElement>(null);
  const [showCreateColor, setShowCreateColor] = useState<boolean>(false);
  const [showUpdateColor, setShowUpdateColor] = useState<boolean>(false);
  const handleCreateColor = (color: RGBColor) => {
    setCreateColor(color);
  };
  const handleUpdateColor = (color: RGBColor) => {
    setUpdateColor(color);
  };
  useClickOutside(createRef, () => setShowCreateColor(false));
  useClickOutside(updateRef, () => setShowUpdateColor(false));

  console.log(garage);
  return (
    <>
      <div className="flex justify-center gap-3 items-center flex-wrap">
        <div className="flex items-center gap-2">
          <button className="btn btn-sm btn-primary text-white">Race</button>
          <button className="btn btn-sm btn-secondary text-white">Reset</button>
        </div>
        <div className="flex gap-2 items-center relative">
          <input
            placeholder="Type car's brand"
            className="input input-bordered input-sm"
            type="text"
          />
          <div ref={createRef}>
            <div
              onClick={() => setShowCreateColor(!showCreateColor)}
              className="w-4 h-4 border border-white cursor-pointer rounded-full"
              style={{
                background: `rgb(${createColor.r}, ${createColor.g}, ${createColor.b})`,
              }}
            ></div>
            <ColorPicker
              show={showCreateColor}
              color={createColor}
              onColorChange={handleCreateColor}
            />
          </div>
          <button className="btn btn-success text-white btn-sm">Create</button>
        </div>

        <div className="flex gap-2 items-center relative">
          <input
            placeholder="Type car's brand"
            className="input input-bordered input-sm"
            type="text"
          />
          <div ref={updateRef}>
            <div
              onClick={() => setShowUpdateColor(!showUpdateColor)}
              className="w-4 h-4 border border-white cursor-pointer rounded-full"
              style={{
                background: `rgb(${updateColor.r}, ${updateColor.g}, ${updateColor.b})`,
              }}
            ></div>
            <ColorPicker
              show={showUpdateColor}
              color={updateColor}
              onColorChange={handleUpdateColor}
            />
          </div>
          <button className="btn btn-primary text-white btn-sm">Update</button>
        </div>
        <button className="btn btn-success text-white btn-sm">
          Generate cars
        </button>
      </div>
      {/* CARS */}
      <div>
        {isLoading && <div>Loading</div>}
        {!isLoading && (
          <div>
            {garage?.map((value) => (
              <div key={value.id}>{value.name}</div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Garage;
