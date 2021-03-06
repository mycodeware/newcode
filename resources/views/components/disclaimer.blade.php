@extends('layouts.app')

@section('content')
    <div class="clearfix"></div>



    <!-- Start Home -->

  <section class="sub-header text-center" style="background-image:url({{url('img/terms.jpg')}})">
    
    <div class="container">
        
                    <span>COMPANY PROFILE</span>
                    <h3 class="text-capitalize">{{ __('Disclaimer') }}</h3>
    </div>

  </section>
<section class="content_outer">
    <div class="container">
        <div class="row">
            <ul>
        <li><strong>{{ __('RESPONSIBILITY') }}</strong>
            <p>{{ __('ZenVentures makes no express, implied or statutory representations, warranties, or guarantees in connection with the service, the information provided by users of the site, including but not limited to the claims and representations pertaining to user’s business, investment readiness or the quality, suitability, truth, accuracy or completeness of any information contained or presented.') }}</p>
            <p>{{ __('You are responsible for your own risk assessment before acting upon any information provided via ZenVentures or any one of its users, affiliates, visitors or others. Before pursuing any legal or financial strategy, or taking any decision at all, you should consult with your legal or financial advisor or CPA. ZenVentures (and anything related to ZenVentures) does not take responsibility for any conducts of individual users, any content displayed or any outcome, disputes arising from the usage of the site.') }}</p>
            <p>{{ __('Unless otherwise explicitly stated, to the maximum extent permitted by applicable law, materials and information forming part of our Services, is provided to you on an “As is”, “As available” basis with no warranty nor implied warranty of merchant, fitness for a particular purpose, or guarantee non-infringement of third-party rights. We do not warrant the timeliness, workmanship, correction, completion, investment readiness of any businesses uses our Services.') }}</p>
        </li>
        <li><strong>{{ __('OUR SERVICES') }}</strong>
            <p>{{ __('ZenVentures does not provide personal investment, financial or legal advice to individuals, or act as personal financial, legal, or institutional investment advisor, or individually advocate the purchase or sale of any security or investment, or the use of any particular financial or legal strategy.') }}</p>
            <p>{{ __('Neither ZenVentures nor its service providers make any warranty, express or implied, that the site will operate without error or interruption or be free from viruses or other harmful components or that the information on the site, including the business plans and content provided by other users, will be accurate, timely or complete. To the full extent permitted by applicable law, ZenVentures and its service providers expressly disclaim any warranties of title, merchantability, non-infringement and fitness for a particular purpose (even if the purpose has been disclosed).') }}</p>
        </li>
        <li><strong>{{ __('INVESTMENT RISKS') }}</strong>
            <p>{{ __('You are responsible for your own investment decisions, and acknowledge that ZenVentures does not recommend any particular company or user of the Site for investment. You acknowledge that you understand that all investments in any companies involve a high degree of risk, and you bear the risk of complete financial loss. You acknowledge that any access, use and reliance on any information and knowledge gained through ZenVentures is based on you own free and independent decision without any influence from ZenVentures, nor any person affiliated with ZenVentures. You acknowledges that ZenVentures, and any person affiliated with ZenVentures, are not responsible for your use of the information, investment decision, or the results of any investment. Investors should conduct their own research on potential deals over and above the information provided by ZenVentures.') }}</p>
            <p>{{ __('No information, whether oral or written, obtained by a person in the Network shall create any warranty enforceable as against ZenVentures.') }}</p>
            <p>{{ __('To the maximum extent permissible by applicable laws, ZenVentues denounces any fiduciary responsibilities to any users, employees, contractor and service providers.') }}</p>
        </li>
    </ul>
        </div>
    </div>
</section>
@endsection