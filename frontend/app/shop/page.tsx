import ShopHero  from "@/components/common/shopSection/ShopHero";
//import FeaturedProducts from "@/components/common/shopSection/FeaturedProducts";
import FeaturedCollection from "@/components/common/shopSection/FeaturedCollection";
import ShopCategories from "@/components/common/shopSection/ShopCategories";
import CollectionPreview from "@/components/common/shopSection/CollectionPreview";
import WhyEmifex from "@/components/common/shopSection/WhyEmifex";
import CustomTailoring from "@/components/common/shopSection/CustomTailoring";
import ProductCatalogue from "@/components/common/shopSection/ProductCatalogue";
import ScrollReveal from "@/components/common/scroll/ScrollReveal";
export default function Shop() {
  return (
    <main className="flex flex-col">
      <ScrollReveal>
        <ShopHero />
      </ScrollReveal>

      <ScrollReveal>
        <FeaturedCollection/>
      </ScrollReveal>
      <ScrollReveal>
        <ShopCategories/>
      </ScrollReveal>
      <ScrollReveal>
        <CollectionPreview />
      </ScrollReveal>

      <ScrollReveal>
        <WhyEmifex />
      </ScrollReveal>
      <ScrollReveal>
        <CustomTailoring />
      </ScrollReveal>
      <ScrollReveal>
        <ProductCatalogue />
      </ScrollReveal>
    </main>
  );
}