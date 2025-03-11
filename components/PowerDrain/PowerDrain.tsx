import { Power } from "lucide-react"
import { useFullScreen } from "../(prank-screen)/hooks/useFullScreen";
export default function PowerDrain() {
  const { isFullscreen } = useFullScreen();
  return (
    <div className={"h-full bg-[#222222] flex items-center justify-center relative"}>
      <Power className={`${isFullscreen ? "h-[32rem] p-10" : "h-32  p-4"} w-auto bg-[#515151] rounded-full`} />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <div className={`w-5/6 h-3/5 text-white  text-wrap ${isFullscreen ? "text-4xl" : "text-[.7rem]"} flex flex-col justify-around gap-2`}>
          {/* English */}
          <p className="">
            You need to restart your computer. Hold down the Power button for several seconds or press the Restart
            button.
          </p>

          {/* French */}
          <p className="">
            Veuillez redémarrer votre ordinateur. Maintenez la touche de démarrage enfoncée pendant plusieurs secondes
            ou bien appuyez sur le bouton de réinitialisation.
          </p>

          {/* German */}
          <p className="">
            Sie müssen Ihren Computer neu starten. Halten Sie dazu die Einschalttaste einige Sekunden gedrückt oder
            drücken Sie die Neustart-Taste.
          </p>

          {/* Japanese */}
          <p className="">
            コンピュータを再起動する必要があります。パワーボタンを 数秒間押し続けるか、リセットボタンを押してください。
          </p>
        </div>
      </div>
    </div >
  )
}