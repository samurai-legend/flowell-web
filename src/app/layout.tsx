import Footer from "@app/components/footer/Footer";
import Header from "@app/components/header/Header";
import StyledComponentsRegistry from "@app/lib/registry";
import Providers from "@app/providers";
import "@app/styles/main.scss";
import SmoothScroll from "@app/elements/SmoothScroll";

export const metadata = {
  title: "Build, Grow, and Scale Your Health Coaching Career With Flowell",
  description:
    "Flowell provides Certified Health Coaches with the resources, technology, and support needed to achieve career success.  Flowell is a Founder Institute portfolio company and fast growing community of mentors and industry leaders.  Join the movement and watch your success skyrocket!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <SmoothScroll> */}
            <StyledComponentsRegistry>
              <Header />
              {children}
              <Footer />
            </StyledComponentsRegistry>
          {/* </SmoothScroll> */}
        </Providers>
      </body>
    </html>
  );
}
