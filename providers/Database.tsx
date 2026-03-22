import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator'
import { Text } from '@/components/ui/text'
import migrations from '@/drizzle/migrations'
import { db } from '@/features/library/lib/db'
import type { ReactNode } from 'react'

export default function DatabaseProvider({ children }: { children: ReactNode }) {
  const { error } = useMigrations(db, migrations)

  if (error) {
    return <Text>{error.message}</Text>
  }

  return <>{children}</>
}
