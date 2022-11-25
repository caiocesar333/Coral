import "../../styles/global.css"
import { Container, P, STab, STabList, STabPanel, STabs } from "./style";



export function InfoTabs() {
    return (
        <Container>
            <STabs selectedTabClassName="active">
                <STabList>
                    <STab>Product Description</STab>
                    <STab>Related Products</STab>
                    <STab>Ratings and Reviews</STab>
                </STabList>
                <STabPanel>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras
                        molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna.
                        Cras lacus, viverra auctor in turpis est quisque eget tristique.
                    </P>
                    <P>Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra
                        platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur
                        sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.
                    </P>
                    <P>Eget est vel sagittis amet sit eu eu ullamcorper tellus.
                        Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque.
                        Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst.
                        Ac ut elementum molestie sit felis imperdiet.
                    </P>
                </STabPanel>
                <STabPanel>
                    <P>Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra
                        platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur
                        sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.
                    </P>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras
                        molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna.
                        Cras lacus, viverra auctor in turpis est quisque eget tristique.
                    </P>
                    <P>Eget est vel sagittis amet sit eu eu ullamcorper tellus.
                        Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque.
                        Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst.
                        Ac ut elementum molestie sit felis imperdiet.
                    </P>
                </STabPanel>
                <STabPanel>
                    <P>#BRASIL HEXA</P>
                    <P>Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et pharetra
                        platea pretium nec feugiat tincidunt quam leo tristique. Nulla enim consectetur
                        sit et tempus, faucibus leo ac cras. Purus ut non eu mus volutpat.
                    </P>
                    <P>Eget est vel sagittis amet sit eu eu ullamcorper tellus.
                        Leo mauris, faucibus vulputate adipiscing elementum tristique dictumst augue pellentesque.
                        Justo, sed nunc, pretium turpis scelerisque. Enim urna etiam morbi vestibulum ac dictumst.
                        Ac ut elementum molestie sit felis imperdiet.
                    </P>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus scelerisque laoreet tortor cras
                        molestie tincidunt malesuada malesuada. Neque, mauris duis dui id morbi magna.
                        Cras lacus, viverra auctor in turpis est quisque eget tristique.
                    </P>
                </STabPanel>
            </STabs>
        </Container>
    )

}