"use client";
import { Header } from "@/components/Header";
import "@/styles/globals.css";
import { Roboto  } from "next/font/google";
import { Footer } from "@/components/Footer";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
         <title>Delano Quirino</title>
      </head>
      <body className={roboto.className}>
        <Header />
        <ApolloProvider client={client}>{children}</ApolloProvider>
        <Footer/>
      </body>
    </html>
  );
}
