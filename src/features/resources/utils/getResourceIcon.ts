import {
   FileArchive,
   FileCode,
   FileImage,
   FileSpreadsheet,
   FileText,
   Presentation,
} from "lucide-react";

import { FaFigma } from "react-icons/fa";

export function getResourceIcon(type: string) {
   switch (type) {
      case "pdf":
         return {
            Icon: FileText,
            color: "text-red-500",
         };

      case "ppt":
         return {
            Icon: Presentation,
            color: "text-orange-500",
         };

      case "xlsx":
         return {
            Icon: FileSpreadsheet,
            color: "text-green-500",
         };

      case "zip":
         return {
            Icon: FileArchive,
            color: "text-purple-500",
         };

      case "png":
      case "jpg":
         return {
            Icon: FileImage,
            color: "text-cyan-500",
         };

      case "docx":
         return {
            Icon: FileText,
            color: "text-blue-500",
         };

      case "figma":
         return {
            Icon: FaFigma,
            color: "text-[#F24E1E]",
         };

      case "starter-project":
         return {
            Icon: FileCode,
            color: "text-amber-500",
         };

      default:
         return {
            Icon: FileText,
            color: "text-slate-500",
         };
   }
}