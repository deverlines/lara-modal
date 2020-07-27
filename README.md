
    <div 
         lara-modal="modal-name"    - modal-name
         mode="mode"                - html, preload 
         discover                   - found at Find 
         style="display: none"
         url="examples/ajax.html"   - url for ajax
    >...</div>

example html

    <div lara-modal="html-modal" mode="html" discover style="display: none">
        <div>
            <p>i am html modal</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet commodi consequatur cum deleniti dolor, ducimus ea eaque, esse exercitationem fuga illo impedit incidunt inventore libero maiores minus molestiae natus necessitatibus nulla odio omnis pariatur perspiciatis quae quaerat quas qui repellendus sed sint, sit tenetur totam ullam vel? Libero nobis similique velit. Adipisci aliquid blanditiis corporis cum, cupiditate deserunt ea eveniet facere fugiat fugit iste itaque magnam modi molestiae, nulla officia placeat provident quae quia quibusdam reiciendis repellat repudiandae saepe soluta vel veniam veritatis! Ipsum nobis obcaecati odit officia soluta? Amet consectetur debitis delectus dicta earum eligendi error est explicabo illum impedit in iste iure laboriosam magni, maxime nulla placeat quas quasi qui repellendus temporibus vel velit. Ad ea fugiat quaerat. Ad asperiores eius est molestiae natus odit repellendus, repudiandae! A amet consequuntur corporis dignissimos dolorem doloremque doloribus dolorum eaque eius enim eos explicabo facere fuga inventore, minus modi obcaecati officia, officiis possimus qui rem rerum ullam velit! Aspernatur harum obcaecati tenetur voluptatibus. Adipisci deleniti, dolorum, eaque eveniet explicabo incidunt, molestias optio qui sapiente tempora voluptas voluptatum? Accusantium amet blanditiis commodi corporis ea, ex facere ipsam itaque pariatur quam quibusdam rem reprehenderit saepe tempora vitae? Ab accusantium architecto aspernatur assumenda aut debitis delectus dicta distinctio error eum eveniet expedita facere fuga, in iure laboriosam natus numquam placeat quam quisquam quo quos repellat saepe sapiente sunt. Accusamus excepturi id ipsam ipsum nam natus omnis quasi quibusdam sapiente voluptate? At deleniti dolore magnam nam non optio perferendis quod recusandae voluptates! Assumenda excepturi itaque iure laboriosam optio pariatur provident qui ullam veniam voluptatum. Accusantium alias atque consequatur cumque suscipit. Beatae commodi cupiditate est in laudantium minima mollitia quas qui similique tempore? Dolor fugiat harum laborum nesciunt recusandae sint sunt suscipit? Aliquid amet assumenda exercitationem facere facilis harum id ipsum laborum officiis optio quam quidem quod repellat repellendus saepe soluta vero, voluptates. Culpa illum odio quae. Ab commodi eligendi ex numquam officia omnis velit. A accusantium autem consequuntur corporis cum delectus dignissimos doloribus et itaque labore laboriosam libero minima mollitia natus, nemo nesciunt, nobis numquam quasi qui quod rem temporibus, ullam? Atque, molestias nesciunt? Eligendi pariatur possimus quibusdam sint soluta. Ad architecto dolor labore sed? Ab doloribus eaque excepturi iste laboriosam minima, modi nemo neque officia pariatur perferendis rem unde. Dolorum eaque eligendi explicabo maxime mollitia nam numquam odio pariatur sequi vitae. Minima quibusdam quod sapiente. Adipisci fuga fugiat illum maiores nam nihil, non nulla quia vel veniam! Amet architecto consectetur cumque cupiditate dolore dolores earum eos error eum, exercitationem id impedit in, itaque laudantium libero modi molestiae neque nisi nostrum obcaecati officia quibusdam recusandae repudiandae sunt suscipit, totam vitae voluptates! Architecto autem beatae eligendi, eos excepturi exercitationem id illo illum ipsum mollitia nisi nulla officiis quaerat qui rem rerum sed sint soluta suscipit vero. Assumenda et fugiat nemo obcaecati omnis repellat repudiandae! Odit quo quod repudiandae suscipit vel? Ad assumenda expedita iste itaque minima mollitia officia quo repellendus repudiandae. Autem cumque eum, fugiat nesciunt nostrum numquam perspiciatis. Alias fugiat hic magni sint unde!</p>

        </div>
    </div>

example ajax preload

    <div lara-modal="preload-modal" mode="preload" url="examples/ajax.html" discover style="display: none"></div>
    

find modals    
    
    LaraModal.find(document.body);
    
open buttons
    
    <div lara-modal-open-button="html-modal">Open html modal</button>
    <button lara-modal-open-button="preload-modal">Open preload modal</button>    
    
    