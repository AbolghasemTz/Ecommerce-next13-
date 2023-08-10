export const metadata = {
  title: 'پروفایل ادمین',
  description: 'پروفایل ادمین',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning={true}>
     <Toaster />
        <Providers>
     
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
