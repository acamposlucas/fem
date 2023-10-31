import { FontsType } from "@/@types/font";
import Logo from "@/assets/images/logo.svg";
import { SunIcon, MoonIcon } from "lucide-react";
import { FONTS } from "@/constants/fonts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Switch } from "./ui/switch";
import { useState } from "react";

interface HeaderProps {
  font: FontsType;
  setFont: React.Dispatch<React.SetStateAction<FontsType>>;
}

function Header({ font, setFont }: HeaderProps) {
  const [theme, setTheme] = useState<boolean>(false);
  const handleChangeFont = (font: string) => {
    setFont(font as FontsType);
  };

  const handleToggleTheme = (checked: boolean) => {
    setTheme(checked);
  };

  return (
    <header id="header" className="py-5">
      <div className="flex items-center justify-between">
        <Logo width={32} height={32} />
        <div className="flex items-center">
          <div className="flex h-10 items-center space-x-4">
            <Select onValueChange={(font) => handleChangeFont(font)}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder={formatFont(font)} />
              </SelectTrigger>
              <SelectContent>
                {FONTS.map(({ value, description }) => (
                  <SelectItem key={value} value={value}>
                    {description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Separator orientation="vertical" />
            <div className="flex items-center gap-2">
              <Switch
                onCheckedChange={(checked) => handleToggleTheme(checked)}
              />
              {theme ? <SunIcon /> : <MoonIcon />}
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}

function formatFont(font: string) {
  switch (font) {
    case "font-sans":
      return "Sans Serif";
    case "font-serif":
      return "Serif";
    case "font-mono":
      return "Mono";
  }
}

export default Header;
