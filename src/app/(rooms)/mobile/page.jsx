import React from 'react'
import Mobiled from '../../Components/extra/Mobiled'

export default function page() {
  return (
    <div>
      <div className="flex flex-col text-center text-slate-900 pb-5 px-4">
         <p>We&apos;d like to let you know,that all this listed apks</p>
         <p>Can only be downloaded on your mobile device, is for Android</p>
         <p>But soon we will post IOS apk vesion of those apks</p>
         <p>Those was made with React-native</p>
      </div>
        <Mobiled/>
    </div>
  )
}
