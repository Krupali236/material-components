import React from "react";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import AlarmOnOutlinedIcon from "@mui/icons-material/AlarmOnOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import SaveIcon from "@mui/icons-material/Save";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AnimationRoundedIcon from "@mui/icons-material/AnimationRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import BatteryChargingFullRoundedIcon from "@mui/icons-material/BatteryChargingFullRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarTwoToneIcon from '@mui/icons-material/StarTwoTone';
import AlarmOnTwoToneIcon from '@mui/icons-material/AlarmOnTwoTone';
import BatteryCharging20TwoToneIcon from '@mui/icons-material/BatteryCharging20TwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import Face3SharpIcon from '@mui/icons-material/Face3Sharp';
import FolderSharpIcon from '@mui/icons-material/FolderSharp';

const MaterialIcons = () => {
  return (
    <div>
      <h3>Outlined</h3>
      <AccessTimeFilledOutlinedIcon />
      <AlarmOnOutlinedIcon />
      <DeleteOutlineOutlinedIcon />
      <StarBorderOutlinedIcon />

      <h3>Filled</h3>
      <SaveIcon />
      <StarIcon />
      <DeleteIcon />
      <NotificationsActiveIcon />

      <h3>Rounded</h3>
      <AnimationRoundedIcon />
      <ArrowBackIosNewRoundedIcon />
      <ArticleRoundedIcon />
      <BatteryChargingFullRoundedIcon />
      <StarRateRoundedIcon />

      <h3>Two Tone</h3>
      <StarTwoToneIcon/>
      <AlarmOnTwoToneIcon/>
      <BatteryCharging20TwoToneIcon/>
      <EmojiEmotionsTwoToneIcon/>

      <h3>Sharp</h3>
      <PersonSharpIcon/>
      <EmailSharpIcon/>
      <Face3SharpIcon/>
      <FolderSharpIcon/>
    </div>
  );
};

export default MaterialIcons;
