<template>
    <div class="row row-cols-1 row-cols-md-2">
        <div class="col" v-for="element in gridElement" :key="element.id">
            <div class="cards" :style="`background-image:url(${element.bg})`">
                <div class="news_tab">
                    <div class="info">
                        <span class="date">
                            {{element.date}}
                        </span>
                        <span class="writer">
                            by {{element.writer}}
                        </span>
                    </div>
                    <div class="title py-3">
                        <h5> {{element.title}} </h5> 
                    </div>

                    <div class="desc dots">
                        {{element.text}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogGridComponent',
    data() {
        return {
            gridElement: [
                {
                    id: 1,
                    bg: require('@/assets/img/news/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg'),
                    date: 'july 4, 2018',
                    writer: "paul",
                    title: "Canadian Consulting Firm acquired by UK Giant",
                    text: "When, while lovely valley terns with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees and but a lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo harum quae explicabo, ad molestiae beatae quibusdam facilis cupiditate optio?"
                },
                {
                    id: 2,
                    bg: require('@/assets/img/news/business-people-working-together-on-project-and-5FHSKBL-1390.jpg'),
                    date: 'july 4, 2018',
                    writer: "paul",
                    title: "Canadian Consulting Firm acquired by UK Giant",
                    text: "When, while lovely valley terns with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees and but a lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo harum quae explicabo, ad molestiae beatae quibusdam facilis cupiditate optio?"
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>

.cards {
    height: 475px;
    background-repeat: no-repeat;
    background-position: top left;
    background-size: cover;
    position: relative;

    .news_tab {
        display: flex;
        flex-direction: column;
        background-color: white;
        width: 70%;
        height: 50%;
        padding: 2rem 6rem 2rem 2rem;
        position: absolute;
        right: 0;
        bottom: -4rem;

        .info {
            font-size: 0.7rem;
            color: $textNewsInfo;
            
            span:nth-child(1) {
                margin-right: 1rem;
            }
        }

        .desc {
            font-size: 0.82rem;
            line-height: 22px;
            color: $textCostumerCard;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;  /* limit to 2 lines */
        }
        
    }
}
</style>