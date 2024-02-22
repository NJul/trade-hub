import '@/app/ui/global.css';
import { poppins } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
