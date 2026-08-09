import ShopHero  from "@/components/common/shopSection/ShopHero";
//import FeaturedProducts from "@/components/common/shopSection/FeaturedProducts";
import FeaturedCollection from "@/components/common/shopSection/FeaturedCollection";
import ShopCategories from "@/components/common/shopSection/ShopCategories";
import CollectionPreview from "@/components/common/shopSection/CollectionPreview";
import WhyEmifex from "@/components/common/shopSection/WhyEmifex";
import CustomTailoring from "@/components/common/shopSection/CustomTailoring";
import ProductCatalogue from "@/components/common/shopSection/ProductCatalogue";
export default function Shop() {
  return (
    <main className="flex flex-col">
      <div>
        <ShopHero />
      </div>

      <div>
        <FeaturedCollection/>
      </div>
      <div>
        <ShopCategories/>
      </div>
      <div>
        <CollectionPreview />
      </div>

      <div>
        <WhyEmifex />
      </div>
      <div>
        <CustomTailoring />
      </div>
      <div>
        <ProductCatalogue />
      </div>
    </main>
  );
}