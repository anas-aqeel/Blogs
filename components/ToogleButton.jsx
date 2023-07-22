'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function ToogleButton() {
  const [enabled, setEnabled] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      className={`${
        enabled ? 'bg-black' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}
