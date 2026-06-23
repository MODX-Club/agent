import { useLovableContext } from '../../lovable-context/LovableContext'
import { LovableHero } from './LovableHero'
import { LovableProblem } from './LovableProblem'
import { LovableProcess } from './LovableProcess'
import { LovableGuarantees } from './LovableGuarantees'
import { LovableTech } from './LovableTech'
import { LovableCta } from './LovableCta'
import heroImage from '../../assets/hero-migration.jpg'
import processImage from '../../assets/process-pipeline.jpg'

export const MainPageLovable: React.FC = () => {
  const { data, onPrimaryCta, onSecondaryCta } = useLovableContext()

  return (
    <>
      <LovableHero
        data={data.hero}
        imageSrc={heroImage.src}
        onPrimaryCta={onPrimaryCta}
        onSecondaryCta={onSecondaryCta}
      />
      <LovableProblem data={data.problem} />
      <LovableProcess data={data.process} imageSrc={processImage.src} />
      <LovableGuarantees data={data.guarantees} />
      <LovableTech data={data.tech} />
      <LovableCta
        data={data.cta}
        onPrimaryCta={onPrimaryCta}
        onSecondaryCta={onSecondaryCta}
      />
    </>
  )
}
