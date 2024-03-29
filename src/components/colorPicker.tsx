import React, { useState, useEffect } from "react";
import { ColorResult, RGBColor, SketchPicker } from "react-color";

interface ColorPickerProps {
  color: RGBColor;
  show: boolean;
  onColorChange: (color: RGBColor) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  color,
  show,
  onColorChange,
}) => {
  const [pickerColor, setPickerColor] = useState<RGBColor>(color);

  useEffect(() => {
    setPickerColor(color);
  }, [color]);

  const handleColorChange = (color: ColorResult) => {
    setPickerColor(color.rgb);
    onColorChange(color.rgb);
  };

  if (!show) return null;

  return (
    <div className="absolute left-5 bottom-0 top-1">
      <SketchPicker
        width="200px"
        color={pickerColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorPicker;
